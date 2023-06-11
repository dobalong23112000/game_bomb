import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Button, Input, Modal, ModalBody } from "reactstrap";
import HeartIcon from "components/Icons/HeartIcon";
const cx = classNames.bind(style);
const ModalPlayer = ({ isOpenModal, setIsOpenModal }) => {
  const toggle = () => setIsOpenModal(!isOpenModal);
  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered className="SmallCard">
      <ModalBody>
        <div className="d-flex align-items-center justify-content-evenly flex-column">
          <div style={{ padding: "35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header","ms-2")}>NGƯỜI CHƠI 1</span>
            </div>
            <div className="mt-3">
              <Input placeholder="Tên người chơi">
              </Input>
            </div>
            <div>Input giới tính người chơi 2</div>
          </div>
          <div style={{ padding: "35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header","ms-2")}>NGƯỜI CHƠI 2</span>
            </div>
            <div className="mt-3">
              <Input placeholder="Tên người chơi">
              </Input>
            </div>
            <div>Input giới tính người chơi 2</div>
          </div>
          <div style={{ padding: "35px" }}>
            <HeartIcon bigheart />
            <br />
            <span className={cx("text_save")}>LƯU</span>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalPlayer;
