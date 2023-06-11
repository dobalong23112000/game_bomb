import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";

import logo_game from "assets/images/logo_game_challenge.png";
import play_img from "assets/images/do_it_now.png";
// logo 4 card
import help_card from "assets/images/help_card.png";
import who_card from "assets/images/who_card.png";
import suggest_card from "assets/images/suggest_card.png";
import tips_card from "assets/images/tips_card.png";

import GameIcon from "components/Icons/GameIcon";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);
const GameChallenge = () => {
  const navigate =useNavigate()
  return (
    <div className={cx("wrapper")}>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center">
          <img
            src={logo_game}
            alt="logo_game"
            height={"200px"}
            width={"200px"}
          />
        </div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <span onClick={() => {
            navigate('/select-game')
          }}>
            <GameIcon />
          </span>
        </div>
      </div>
      <div
        className="d-flex justify-content-around"
        style={{ height: "536px" }}
      >
        <div style={{ marginTop: "70px" }}>
          <div className="mb-3">
            <img
              src={help_card}
              alt="logo_game"
              height={"205px"}
              width={"174px"}
            />
          </div>
          <div className="mb-3">
            <img
              src={who_card}
              alt="logo_game"
              height={"205px"}
              width={"174px"}
            />
          </div>
        </div>
        <div>
          <div className="mb-3">
            {" "}
            <img
              src={suggest_card}
              alt="logo_game"
              height={"205px"}
              width={"174px"}
            />
          </div>
          <div className="mb-3">
            <img
              src={tips_card}
              alt="logo_game"
              height={"205px"}
              width={"174px"}
            />
          </div>
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
        <img
          src={play_img}
          alt="play_img"
          height={"200px"}
          width={"200px"}
          style={{ position: "absolute", top: "-120px", right: 0, zIndex: 10 }}
        />
      </div>
    </div>
  );
};

export default GameChallenge;
