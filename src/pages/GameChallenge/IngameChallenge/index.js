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
import last_view from "assets/images/last_view.png";
import 'animate.css';

const cx = classNames.bind(style);

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
const IngameChallenge = () => {
  const playerRef = useRef(null);
  const [startGame, setStartGame] = useState(false);
  const [countdown, setCountdown] = useState(80); //
  const { infoUser,authState } = useContext(AuthContext);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isOpenModalPauseGame, setIsOpenModalPauseGame] = useState(false);
  const [lastView,setLastView] = useState(false)

  const [questions,setQuestions] = useState([]);
  useEffect(()=>{
    
    if(authState?.user?.sexChallenge) {
      // setQuestions(authState?.user?.sexChallenge)

    const evenQuestions = authState?.user?.sexChallenge.filter((_, index) => ((index + 1) % 2 !== 0));
    const oddQuestions  = authState?.user?.sexChallenge.filter((_, index) => ((index + 1) % 2 === 0));

    const shuffledEvenQuestions = shuffleArray(evenQuestions);
    const shuffledOddQuestions = shuffleArray(oddQuestions);

    const shuffledArray = [];
    for (let i = 0; i < authState?.user?.sexChallenge?.length; i++) {
      shuffledArray[i] = i % 2 === 0 ? shuffledEvenQuestions[i / 2] : shuffledOddQuestions[(i - 1) / 2];
    }

    setQuestions(shuffledArray);
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
      <div className={`d-flex flex-column align-items-center animate__animated ${lastView ? 'animate__jackInTheBox d-block' : 'd-none' } `}>
          <img src={last_view} alt="#" width={"90%"} height={"536px"}></img>
        </div>
      <div
        className={`d-flex flex-column align-items-center ${lastView && 'd-none'}`}
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
            {questions[activeQuestion]?.name}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around w-100">
          <div
            className={cx("render_question")}
            onClick={() => {
              playerRef.current.play();
              if (activeQuestion > questions.length - 1) {
                setLastView(true)
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
