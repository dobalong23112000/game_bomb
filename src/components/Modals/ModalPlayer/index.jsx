import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Button, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import HeartIcon from "components/Icons/HeartIcon";
import male from "assets/images/male.png";
import female from "assets/images/female.png";
import different from "assets/images/different.png";

import Select from "react-select";
const cx = classNames.bind(style);
const ModalPlayer = ({ isOpenModal, setIsOpenModal }) => {
  const toggle = () => setIsOpenModal(!isOpenModal);
  const options = [
    {
      value: "1",
      label: (
        <div>
          <img src={male} alt="" width={"22px"} height={"22px"} />
          Nam
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div>
          <img src={female} alt="" width={"22px"} height={"22px"} />
          Nữ
        </div>
      ),
    },
    {
      value: "3",
      label: (
        <div>
          <img src={different} alt="" width={"22px"} height={"22px"} />
          Khác
        </div>
      ),
    },
  ];
  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered className="SmallCard">
      <ModalBody>
        <div className="d-flex align-items-center justify-content-evenly flex-column">
          <div style={{ padding: "35px 35px 0px 35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header", "ms-2")}>NGƯỜI CHƠI 1</span>
            </div>
            <div className="mt-3">
              <Input placeholder="Tên người chơi"></Input>
            </div>
            <div className="mt-3">
              <Select options={options} isSearchable={false}/>
            </div>
          </div>
          <div style={{ padding: "35px 35px 0px 35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header", "ms-2")}>NGƯỜI CHƠI 2</span>
            </div>
            <div className="mt-3">
              <Input placeholder="Tên người chơi"></Input>
            </div>
            <div className="mt-3">
              <Select options={options}  isSearchable={false}/>
            </div>
          </div>
          <div style={{ padding: "35px 35px" }}>
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
