import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

import "swiper/css";
import { useNavigate } from "react-router-dom";
import logo_game from "assets/images/logo_game.png";
import logo_liam from "assets/images/logo_liam.png";
import PeopleIcon from "components/Icons/PeopleIcon";


const cx = classNames.bind(style);

const SelectGame = () => {
  const navigate = useNavigate();

  return (
    <div className={cx("wrapper")}>
      <div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <span onClick={() => {
            navigate('/home')
          }}>
            <PeopleIcon />
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={logo_game}
            alt="logo_game"
            height={"272px"}
            width={"272px"}
          />
        </div>
      </div>
      <div>
        <div className={cx("game_challenge")} onClick={()=>{
            navigate('/game-challenge')
        }}>
          {/* <img src={gamechallenge} width={372} height={174} alt="" /> */}
        </div>
        <div className={cx("game_bomb")} onClick={()=>{
            navigate('/game-bomb')
        }}>
          {/* <img src={gamebomb} width={372} height={174} alt="" /> */}
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
      </div>
    </div>
  );
};

export default SelectGame;
