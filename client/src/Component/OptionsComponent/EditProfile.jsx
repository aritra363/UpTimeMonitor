import React from "react";
import { useContext, useState } from "react";
import MainState from "../../Context/MainState";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import { AiTwotoneEdit, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";

function EditProfile() {
  const { userData } = useContext(MainState);
  //state for local inputfield
  const [fName, setfName] = useState(userData.firstName);
  const [lName, setlName] = useState(userData.lastName);
  const [prevPass, setPrevPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [pToggle, setpToggler] = useState(false);
  const [prevPassVisibilty, setprevPassVisibilty] = useState(false);
  const [newPassVisibilty, setnewPassVisibilty] = useState(false);

  //handler for input fields
  //firstname
  const fNameHandler = (e) => {
    setfName(e.target.value);
  };
  //lastname
  const lNameHandler = (e) => {
    setlName(e.target.value);
  };
  //previous Password
  const prevPassHandler = (e) => {
    setPrevPass(e.target.value);
  };
  //new Password
  const newPassHandler = (e) => {
    setNewPass(e.target.value);
  };
  //Password toggler
  const pToggleHandler = () => {
    setpToggler((prev) => !prev);
  };
  //prev password Visibility
  const prevPassVisibiltyHandler = () => {
    setprevPassVisibilty((prev) => !prev);
  };
  //new password Visibility
  const newPassVisibiltyHandler = () => {
    setnewPassVisibilty((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaEdit size="20" />
          &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Edit Profile
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="container text-center">
          <div className="card-text">
            <form className="row g-3" name="Name">
              <div className="col-md-6">
                <label htmlFor="inputfName" className="form-label">
                  FirstName
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputfName"
                    onChange={fNameHandler}
                    value={fName}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputlName" className="form-label">
                  LastName
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputlName"
                    onChange={fNameHandler}
                    value={lName}
                  />
                </div>
              </div>
            </form>
            <div className="input-group mb-3">
              <button className="btn btn-primary" onClick={pToggleHandler}>
                <i>
                  {" "}
                  <RiLockPasswordLine />
                </i>{" "}
                Change Password
              </button>
            </div>
            <form
              className="row g-3"
              name="Password"
              style={{ display: `${pToggle ? "" : "none"}` }}
            >
              <div className="col-md-6">
                <label htmlFor="prevPassword" className="form-label">
                  Previous Password
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type={!prevPassVisibilty ? "password" : "text"}
                    className="form-control"
                    id="prevPassword"
                    onChange={prevPassHandler}
                    value={prevPass}
                  />
                  <span
                    className="input-group-text"
                    onClick={prevPassVisibiltyHandler}
                    style={{ cursor: "pointer" }}
                  >
                    {prevPassVisibilty ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type={!newPassVisibilty ? "password" : "text"}
                    className="form-control"
                    id="newPassword"
                    onChange={newPassHandler}
                    value={newPass}
                  />
                  <span
                    className="input-group-text"
                    onClick={newPassVisibiltyHandler}
                    style={{ cursor: "pointer" }}
                  >
                    {newPassVisibilty ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
              </div>
            </form>
            <div className="row justify-content-end">
              <button className="col-4 btn btn-primary">
                <i>
                  {" "}
                  <AiTwotoneEdit />
                </i>{" "}
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
