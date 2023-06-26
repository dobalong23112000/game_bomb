import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import logo_game_challenge from "assets/images/logo_game_challenge.png";
import PauseIcon from "components/Icons/PauseIcon";

import { Player } from "@lottiefiles/react-lottie-player";
import CountdownTimer from "components/CountdownTimer";
import { AuthContext } from "contexts/AuthContext";
import ModalPauseGame from "components/Modals/ModalPauseGame";

const cx = classNames.bind(style);
const IngameChallenge = () => {
  const playerRef = useRef(null);
  const [startGame, setStartGame] = useState(false);
  const [countdown, setCountdown] = useState(80); //
  const { infoUser,authState } = useContext(AuthContext);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isOpenModalPauseGame, setIsOpenModalPauseGame] = useState(false);

  const [questions,setQuestions] = useState([
    { stt: 1, name: "Màu sắc đại diện cho anh và em là gì và tại sao" },
    { stt: 2, name: "Đồ vật nào làm anh hoặc em nghĩ đến nhau" },
    { stt: 3, name: "Ấn tượng đầu tiên và ấn tượng hiện tại?" },
    { stt: 4, name: "Lý do yêu lúc ban đầu và lí do yêu ở hiện tại?" },
  ]);
  useEffect(()=>{
    if(authState?.user?.sexChallenge) {
      setQuestions(authState?.user?.sexChallenge)
    }
  },[authState])
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
              setIsOpenModalPauseGame(true)
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
          <div className={cx("name")}>{activeQuestion % 2 === 0 ? infoUser.name_player1 || 'Người chơi 1' : infoUser.name_player2 || 'Người chơi 2'}</div>
          <div className={cx("content")}>
            {questions[activeQuestion].name}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around w-100">
          <div
            className={cx("render_question")}
            onClick={() => {
              playerRef.current.play();
              if (activeQuestion > questions.length - 2) {
                setActiveQuestion(0);
              } else {
                setActiveQuestion(activeQuestion + 1);
              }
            }}
          >
            {"SKIP"}
          </div>
          <div>
            <CountdownTimer
              startGame={startGame}
              countdown={countdown}
              setCountdown={setCountdown}
            />
          </div>
          <div
            className={cx("render_question")}
            onClick={() => {
              setStartGame(!startGame);
              playerRef.current.play();
              if(countdown === 0) {
                setCountdown(80)
              }
            }}
          >
            {startGame ? "DONE" : "START"}
          </div>
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
      </div>
      <ModalPauseGame isOpenModal={isOpenModalPauseGame} setIsOpenModal={setIsOpenModalPauseGame} linkRedirect={'/game-challenge'}/>
    </div>
  );
};

export default IngameChallenge;
