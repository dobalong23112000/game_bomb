import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import logo_game_bomb from "assets/images/logo_game_bomb.png";
import PauseIcon from "components/Icons/PauseIcon";
import Bomb from "assets/images/bomb.png";
import FireBomb from "assets/images/fire_bomb.png";
import last_view from "assets/images/last_view.png";
import audioFile from 'assets/audio/tieng_bomb.mp3';
import { AuthContext } from "contexts/AuthContext";
import ModalPauseGame from "components/Modals/ModalPauseGame";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

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
const Ingame = () => {
  function getRandomNumber() {
    const numbers = [30, 35, 40];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }
  const audioRef = useRef(null)
  const [activeBomb, setActiveBomb] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const { infoUser, authState } = useContext(AuthContext);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [lastView,setLastView] = useState(false)
  const [questions, setQuestions] = useState([]);
  const  [isMute, setIsMute] =useState(false)
  useEffect(() => {
    if (authState?.user?.sexBomb) {
      setQuestions(shuffleArray([...authState?.user?.sexBomb]));
      // setQuestions(authState?.user?.sexBomb)
    }
  }, [authState]);
  const [isOpenModalPauseGame, setIsOpenModalPauseGame] = useState(false);

  const genNamePlaying = () => {
    return activeQuestion % 2 === 0
      ? infoUser.name_player1 || "Người chơi 1"
      : infoUser.name_player2 || "Người chơi 2";
  };
  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      if (countdown === 1 && !lastView) {
        audioRef.current.play();
        setActiveBomb(true);
      }
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);
  return (
    <>
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
              setIsMute(!isMute)
            }}
            className="me-4"
          >
            {!isMute && <IoVolumeHigh size={'35px'} color="rgb(192, 72, 73)"/>}
           {isMute && <IoVolumeMute size={'35px'} color="rgb(192, 72, 73)"/>} 
          </span>
            <span
              onClick={() => {
                setIsOpenModalPauseGame(true);
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
              if (activeQuestion > questions.length - 1) {
                setLastView(true)
                setActiveQuestion(0)
                setCountdown(getRandomNumber())
              } else {
                setActiveQuestion(activeQuestion + 1);
              }
              if (activeBomb === true) {
                setActiveBomb(false);
                setCountdown(getRandomNumber());
              }
            }}
          >
            {!activeBomb &&  "Next"}
            {activeBomb &&  <div className="mt-5">Đặt lại bomb!</div>}
            
          </div>
        </div>
      </div>
        <div className={cx("logo_liam")}>
          <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
        </div>
        <ModalPauseGame
          isOpenModal={isOpenModalPauseGame}
          setIsOpenModal={setIsOpenModalPauseGame}
          linkRedirect={"/game-bomb"}
        />
      </div>

      <audio ref={audioRef} muted={isMute}>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Ingame;
