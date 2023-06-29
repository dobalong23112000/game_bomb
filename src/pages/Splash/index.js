import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { AuthContext } from "contexts/AuthContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader/Loader";
import NotAuthApi from "api/NotAuthApi";

const cx = classNames.bind(styles);
const Splash = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const checkUser = async () => {
    try {
      setLoading(true);
      const response = await NotAuthApi.checkUser(uuid);
      if (response?.data?.status === 200) {
        navigate("/auth", {
          state: {
            uuid: uuid,
          },
        });
      } else {
        navigate("/");
      }
      setLoading(false);
    } catch (e) {
      navigate("/");
    }
  };
  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { authState } = useContext(AuthContext);
  if (authState.isAuthenticated) {
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <>
      {(authState.authLoading || loading) && <Loader />}
      <div
        className={cx(
          "Loader",
          "d-flex align-items-center justify-content-center"
        )}
      ></div>
    </>
  );
};

export default Splash;
