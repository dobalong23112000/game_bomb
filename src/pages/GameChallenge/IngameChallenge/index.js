import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import logo_game_challenge from "assets/images/logo_game_challenge.png";
import { useNavigate } from "react-router-dom";
import PauseIcon from "components/Icons/PauseIcon";

import { Player } from "@lottiefiles/react-lottie-player";
import CountdownTimer from "components/CountdownTimer";

const cx = classNames.bind(style);
const IngameChallenge = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [startGame, setStartGame] = useState(false);
  const [countdown, setCountdown] = useState(120); // Đếm ngược 90 giây (1 phút 30 giây)

  return (
    <div className={cx("wrapper")}>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center">
          <img
            src={logo_game_challenge}
            alt="logo_game"
            height={"95px"}
            width={"95px"}
          />
        </div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <span
            onClick={() => {
              navigate("/game-challenge");
            }}
          >
            <PauseIcon />
          </span>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ height: "600px" }}
      >
        <div className={cx("bomb")}>
          <div className={cx("bg_bomb")}></div>

          <div className={cx("img_bomb")}>
            <Player
              autoplay={false}
              loop={false}
              controls={false}
              src="https://assets2.lottiefiles.com/packages/lf20_9ivolvho.json"
              style={{ height: "400px", width: "400px" }}
              ref={playerRef}
            ></Player>
          </div>
        </div>
        <div className={cx("wrap_content")}>
          <div className={cx("bg_wrap_content")}></div>
          <div className={cx("name")}>{"DUONGTHING"}</div>
          <div className={cx("content")}>
            {`Duongthing phải direct Bunnybluie để bảo “tớ thích cậu nhiều
            lúmmmmmmmm"`}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around w-100">
          <div
            className={cx("render_question")}
            onClick={() => {
              playerRef.current.play();
            }}
          >
            {"SKIP"}
          </div>
          <div>
            <CountdownTimer startGame={startGame} countdown={countdown} setCountdown={setCountdown} />
          </div>
          <div
            className={cx("render_question")}
            onClick={() => {
              setStartGame(!startGame);
              playerRef.current.play();
            }}
          >
            {startGame ? "DONE" : "START"}
          </div>
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
      </div>
    </div>
  );
};

export default IngameChallenge;
