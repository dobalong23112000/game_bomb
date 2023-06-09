import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { AuthContext } from "contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loading/Loader/Loader";

const cx = classNames.bind(styles);
const LoadSpash = () => {
  const { authState } = useContext(AuthContext);
  if (authState.isAuthenticated) {
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <>
       {authState.authLoading && <Loader />}
       <div
      className={cx(
        "Loader",
        "d-flex align-items-center justify-content-center"
      )}
    >
      <h1 style={{ color: "white" }} className="text-center">
        {!authState.authLoading && 'Quẹt thẻ để tiếp tục chơi!'}
      </h1>
    </div>
    </>
   
  );
};

export default LoadSpash;
