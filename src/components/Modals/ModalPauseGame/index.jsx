import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Button, Modal, ModalBody } from "reactstrap";
import PauseIcon from "components/Icons/PauseIcon";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);
const ModalPauseGame = ({ isOpenModal, setIsOpenModal,linkRedirect }) => {
    const navigate= useNavigate()
  const toggle = () => setIsOpenModal(!isOpenModal);
    const handleRedirect=()=>{
        navigate(linkRedirect)
    }
  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered className="SmallCard">
      <ModalBody>
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <div className={cx("text_header" ,"mt-3 mb-5")}>PAUSE THE GAME</div>
          <div className="mb-5">
            <PauseIcon bigPause={true} />
          </div>
          <div className="d-flex flex-column">
            <Button className={cx("button_next" ,"mt-3 mb-3")} onClick={toggle}>Tiếp tục</Button>
            <Button  className={cx("button_next" ,"mt-3 mb-3")} onClick={handleRedirect}>Trang chủ</Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalPauseGame;
