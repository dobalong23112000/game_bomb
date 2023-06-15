import BigHeartIcon from "components/Icons/BigHeartIcon";
import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);
const CountdownTimer = (props) => {
  const { startGame, countdown, setCountdown } = props;

  useEffect(() => {
    if (startGame) {
      if (countdown > 0) {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, startGame]);

  const formatTime = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="position-relative">
      <BigHeartIcon />
      <div className={cx("text-time")}>{formatTime(countdown)}</div>
    </div>
  );
};

export default CountdownTimer;
