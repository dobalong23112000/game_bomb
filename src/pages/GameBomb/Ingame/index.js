import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import logo_game_bomb from "assets/images/logo_game_bomb.png";
import { useNavigate } from "react-router-dom";
import PauseIcon from "components/Icons/PauseIcon";
import Bomb from "assets/images/bomb.png";
import FireBomb from "assets/images/fire_bomb.png";
import { AuthContext } from "contexts/AuthContext";
const cx = classNames.bind(style);
const Ingame = () => {
  const navigate = useNavigate();
  const [activeBomb, setActiveBomb] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const { infoUser } = useContext(AuthContext);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const questions = [
    { stt: 1, name: "Màu sắc đại diện cho anh và em là gì và tại sao" },
    { stt: 2, name: "Đồ vật nào làm anh hoặc em nghĩ đến nhau" },
    { stt: 3, name: "Ấn tượng đầu tiên và ấn tượng hiện tại?" },
    { stt: 4, name: "Lý do yêu lúc ban đầu và lí do yêu ở hiện tại?" },
  ];
  const genNamePlaying = () => {
    return activeQuestion % 2 === 0
      ? infoUser.name_player1 || 'Người chơi 1'
      : infoUser.name_player2 || 'Người chơi 2';
  };
  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      if (countdown === 1) {
        setActiveBomb(true);
      }
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);
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
            {activeBomb ? "STOP!" : genNamePlaying()}
          </div>
          <div className={cx("content")}>
            {activeBomb && <div>BOMB ĐÃ NỔ!!!</div>}
            {activeBomb
              ? `Hãy nhận 1 sự trừng phạt từ người kia ngay lập tức`
              : questions[activeQuestion]?.name}
          </div>
        </div>
        <div>
          <div
            className={cx("render_question")}
            onClick={() => {
              if (activeQuestion > questions.length - 2) {
                setActiveQuestion(0);
              } else {
                setActiveQuestion(activeQuestion + 1);
              }
              if (activeBomb === true) {
                setActiveBomb(false);
                setCountdown(10);
              }
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
