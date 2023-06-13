import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import logo_game_bomb from "assets/images/logo_game_bomb.png";
import { useNavigate } from "react-router-dom";
import PauseIcon from "components/Icons/PauseIcon";
import Bomb from "assets/images/bomb.png";
import FireBomb from "assets/images/fire_bomb.png";
const cx = classNames.bind(style);
const Ingame = () => {
  const navigate = useNavigate();
  const [activeBomb, setActiveBomb] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center">
          <img
            src={logo_game_bomb}
            alt="logo_game"
            height={"95px"}
            width={"95px"}
          />
        </div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <span
            onClick={() => {
              navigate("/game-bomb");
            }}
          >
            <PauseIcon />
          </span>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ height: "536px" }}
      >
        <div className={cx("bomb")}>
          <div className={cx("bg_bomb")}></div>
          <img
            src={Bomb}
            alt=""
            width={300}
            height={"auto"}
            className={cx("img_bomb", `${activeBomb ? "hidden_bomb" : ""}`)}
          ></img>
          <img
            src={FireBomb}
            alt=""
            width={"400px"}
            height={"auto"}
            className={cx("img_fire_bomb", `${activeBomb ? "explode" : ""}`)}
          ></img>
        </div>
        <div className={cx("wrap_content")}>
          <div className={cx("bg_wrap_content")}></div>
          <div className={cx("name")}>
            {activeBomb ? "STOP!" : "DUONGTHING"}
          </div>
          <div className={cx("content")}>
            {activeBomb && <div>BOMB ĐÃ NỔ!!!</div>}
            {activeBomb
              ? `Hãy nhận 1 sự trừng phạt từ người kia ngay lập tức`
              : `Duongthing phải direct Bunnybluie để bảo “tớ thích cậu nhiều
            lúmmmmmmmm"`}
          </div>
        </div>
        <div>
          <div
            className={cx("render_question")}
            onClick={() => {
              setActiveBomb(!activeBomb);
            }}
          >
            {activeBomb ? "Đặt lại bomb" : "Next"}
          </div>
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
      </div>
    </div>
  );
};

export default Ingame;
