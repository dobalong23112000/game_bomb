import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Button, Modal, ModalBody } from "reactstrap";
import HeartIcon from "components/Icons/HeartIcon";
const cx = classNames.bind(style);
const ModalPlayer = ({ isOpenModal, setIsOpenModal }) => {
  const toggle = () => setIsOpenModal(!isOpenModal);
  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered className="SmallCard">
      <ModalBody>
        <div className="d-flex align-items-center justify-content-evenly flex-column">
          <div style={{ padding: "40px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text-header")}>NGƯỜI CHƠI 1</span>
            </div>
            <div></div>
            <div>Input giới tính người chơi 1</div>
          </div>
          <div style={{ padding: "40px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text-header")}>NGƯỜI CHƠI 2</span>
            </div>
            <div>Input tên người chơi 2</div>
            <div>Input giới tính người chơi 2</div>
          </div>
          <div style={{ padding: "40px" }}>
            <HeartIcon bigheart />
            <br />
            LƯU
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalPlayer;
