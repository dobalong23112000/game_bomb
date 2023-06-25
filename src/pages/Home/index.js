import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

import "swiper/css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import LogoutIcon from "components/Icons/LogoutIcon";
import logo_game from "assets/images/logo_game.png";
import logo_liam from "assets/images/logo_liam.png";
import { Button, Modal, ModalBody } from "reactstrap";
import male from "assets/images/male.png";
import female from "assets/images/female.png";
import different from "assets/images/different.png";

import ReloadIcon from "components/Icons/ReloadIcon";
import ModalPlayer from "components/Modals/ModalPlayer";
import ModalPlayerSecond from "components/Modals/ModalPlayerSecond";
const cx = classNames.bind(style);

const Home = () => {
  const navigate = useNavigate();

  const { logoutUser, infoUser } = useContext(AuthContext);
  const { name_player1, name_player2, sex_player1, sex_player2 } = infoUser;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalPlayer, setIsOpenModalPlayer] = useState(false);
  const [isOpenModalPlayerSecond,setIsOpenModalPlayerSecond] = useState(false);
  const toggle = () => setIsOpenModal(!isOpenModal);
  const handleOpenModalPlayer = () => {
    setIsOpenModalPlayer(true);
  };
  const handleOpenModalPlayerSecond = () => {
    setIsOpenModalPlayerSecond(true);
  };
  const genImgSex = (sex) => {
    if (sex === "1") {
      return <img src={male} alt="" width={"57px"} height={"57px"} />;
    }
    if (sex === "2") {
      return <img src={female} alt="" width={"57px"} height={"57px"} />;
    }
    return <img src={different} alt="" width={"57px"} height={"57px"} />;
  };
  return (
    <div className={cx("wrapper")}>
      <div>
        <div className="d-flex justify-content-end  me-3 mt-4">
          <span
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            <LogoutIcon />
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
        <div className="d-flex align-items-center justify-content-evenly">
          <div
            className={cx(
              "small_card",
              "d-flex flex-column align-items-center justify-content-evenly"
            )}
          >
            <div
              className="w-100 text-align-start ms-5"
              onClick={handleOpenModalPlayer}
            >
              <ReloadIcon />
            </div>
            <div>
              {/* <img src={female} alt="" width={"57px"} height={"57px"} /> */}
              {genImgSex(sex_player1)}
            </div>
            <div className={cx("text-card")}>{name_player1 || 'Tên người chơi 1'}</div>
          </div>
          <div
            className={cx(
              "small_card",
              "d-flex flex-column align-items-center justify-content-evenly"
            )}
          >
            <div
              className="w-100 text-align-start ms-5"
              onClick={handleOpenModalPlayerSecond}
            >
              <ReloadIcon />
            </div>
            <div>
              {genImgSex(sex_player2)}
            </div>
            <div className={cx("text-card")}>{name_player2 || 'Tên người chơi 2'}</div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Button
            className={cx("button_next")}
            onClick={(e) => {
              navigate("/select-game");
            }}
          >
            Tiếp theo
          </Button>
        </div>
      </div>
      <div className={cx("logo_liam")}>
        <img src={logo_liam} alt="logo_liam" height={"71px"} width={"71px"} />
      </div>

      <Modal
        isOpen={isOpenModal}
        toggle={toggle}
        centered
        className="SmallCard"
      >
        <ModalBody>
          <div className={cx("wrap_logout")}>
            <div
              style={{ fontWeight: 700, fontSize: "30px" }}
              className="text-center"
            >
              ĐĂNG XUẤT
            </div>
            <div className="d-flex justify-content-between mt-5 w-100">
              <Button
                className={cx("button_logout")}
                onClick={() => {
                  logoutUser();
                }}
              >
                <div className={cx("text_logout")}>YES</div>
              </Button>
              <Button
                className={cx("button_logout")}
                onClick={() => {
                  setIsOpenModal(false);
                }}
              >
                {" "}
                <div className={cx("text_logout")}>NO</div>
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <ModalPlayer
        isOpenModal={isOpenModalPlayer}
        setIsOpenModal={setIsOpenModalPlayer}
      />
       <ModalPlayerSecond
        isOpenModal={isOpenModalPlayerSecond}
        setIsOpenModal={setIsOpenModalPlayerSecond}
      />
    </div>
  );
};

export default Home;
