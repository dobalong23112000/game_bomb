import React, { useContext } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Input, Modal, ModalBody } from "reactstrap";
import HeartIcon from "components/Icons/HeartIcon";
import male from "assets/images/male.png";
import female from "assets/images/female.png";
import different from "assets/images/different.png";

import Select from "react-select";
import { AuthContext } from "contexts/AuthContext";
const cx = classNames.bind(style);
const ModalPlayer = ({ isOpenModal, setIsOpenModal }) => {
  const toggle = () => setIsOpenModal(!isOpenModal);
  const { logoutUser, infoUser, setInfoUser } = useContext(AuthContext);
  const { name_player1, name_player2, sex_player1, sex_player2 } = infoUser;
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
  const genDefaultSex = (sex) => {
    const found = options.find((element) => element.value === sex);
    return found;
  };
  const handleChangeInfo = (field, value) => {
    setInfoUser({ ...infoUser, [field]: value });
  };
  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered className="SmallCard">
      <ModalBody>
        <div className="d-flex align-items-center justify-content-evenly flex-column">
          <div style={{ padding: "35px 35px 0px 35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header", "ms-2")}>
                {"NGƯỜI CHƠI 1"}
              </span>
            </div>
            <div className="mt-3">
              <Input
                placeholder="Tên người chơi"
                value={name_player1}
                onChange={(e) => {
                  handleChangeInfo("name_player1", e.target.value);
                }}
              ></Input>
            </div>
            <div className="mt-3">
              <Select
                placeholder="Giới tính"
                className="basic-single"
                classNamePrefix="select"
                defaultValue={genDefaultSex(sex_player1)}
                options={options}
                isSearchable={false}
                name="select1"
                styles={{
                  control: (defaultStyles) => ({
                    ...defaultStyles,
                    height: "56px",
                    borderRadius: "40px",
                    fontWeight: 700,
                    color: "white",
                    border: 0,
                    backgroundColor: "#781D48",
                    boxShadow: "none",
                    paddingLeft: "20px",
                  }),
                  menu: (defaultStyles) => ({
                    ...defaultStyles,
                    fontWeight: 700,
                    color: "white",
                    border: 0,
                    backgroundColor: "#781D48",
                  }),
                  singleValue: (defaultStyles) => ({
                    ...defaultStyles,
                    fontWeight: 700,
                    color: "white",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    ...(state.selectProps.menuIsOpen && { backgroundColor: 'transparent' }), // Optional: Change the background color when the menu is open and the option is focused
                  }),
                }}
                onChange={(e) => {
                  handleChangeInfo("sex_player1", e.value);
                }}
              />
            </div>
          </div>
          <div style={{ padding: "35px 35px 0px 35px" }}>
            <div>
              <HeartIcon />
              <span className={cx("text_header", "ms-2")}>
                {"NGƯỜI CHƠI 2"}
              </span>
            </div>
            <div className="mt-3">
              <Input
                placeholder="Tên người chơi"
                value={name_player2}
                onChange={(e) => {
                  handleChangeInfo("name_player2", e.target.value);
                }}
              ></Input>
            </div>
            <div className="mt-3">
              <Select
                placeholder="Giới tính"
                className="basic-single"
                classNamePrefix="select"
                options={options}
                isSearchable={false}
                defaultValue={genDefaultSex(sex_player2)}
                name="select2"
                styles={{
                  control: (defaultStyles) => ({
                    ...defaultStyles,
                    height: "56px",
                    borderRadius: "40px",
                    fontWeight: 700,
                    color: "white",
                    border: 0,
                    backgroundColor: "#781D48",
                    boxShadow: "none",
                    paddingLeft: "20px",
                  }),
                  menu: (defaultStyles) => ({
                    ...defaultStyles,
                    fontWeight: 700,
                    color: "white",
                    border: 0,
                    backgroundColor: "#781D48",
                  }),
                  singleValue: (defaultStyles) => ({
                    ...defaultStyles,
                    fontWeight: 700,
                    color: "white",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    ...(state.selectProps.menuIsOpen && { backgroundColor: 'transparent' }), // Optional: Change the background color when the menu is open and the option is focused
                  }),
                }}
                onChange={(e) => {
                  handleChangeInfo("sex_player2", e.value);
                }}
              />
            </div>
          </div>
          <div
            style={{ padding: "35px 35px" }}
            onClick={() => {
              toggle();
            }}
          >
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
