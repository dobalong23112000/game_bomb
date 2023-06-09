import React, { useContext } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";


import "swiper/css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import LogoutIcon from "components/Icons/LogoutIcon";
import logo_game from 'assets/images/logo_game.png'
const cx = classNames.bind(style);

const Home = () => {
 
  const navigate = useNavigate();

  const { logoutUser } = useContext(AuthContext);


  return (
    <div className={cx("wrapper")}>
      <div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <LogoutIcon/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={logo_game} alt="" height={'272px'} width={'272px'}/>
        </div>
      </div>
      <div>Content</div>
      <div>Logo Liam</div>
    </div>
  );
};

export default Home;
