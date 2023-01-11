import React from "react";
import { useContext } from "react";
import MainState from "../../Context/MainState";
import {
  IoUnlinkSharp,
  IoCheckmarkDoneCircleSharp,
  IoAddCircleOutline,
  IoAddCircleSharp,
} from "react-icons/io5";
import { MdOutlineHttp, MdAccessTimeFilled } from "react-icons/md";
import { BsSignpost2Fill } from "react-icons/bs";
import "../../CStyling/AddLinks.css"

function AddLinks() {
  const { userData } = useContext(MainState);
  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoAddCircleOutline size="20" />
          &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Add Links
          </span>
        </div>
      </div>
      {userData["checks"].length < 5 ? (
        <div
          className="card-body"
          style={{ overflow: "scroll", maxHeight: "75vh" }}
        >
          <div className="card-text">
            <div className="form-group">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <IoUnlinkSharp />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="URL"
                  aria-label="Url"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <small className="text-muted">
                Provide the URL (with or without http or https)
              </small>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <MdOutlineHttp />
                </span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="https">https</option>
                  <option value="http">http</option>
                </select>
              </div>
              <small className="text-muted">
                Provide the Protocol http or https (default https)
              </small>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <BsSignpost2Fill />
                </span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="get">GET</option>
                  <option value="post">POST</option>
                  <option value="put">PUT</option>
                  <option value="delete">DELETE</option>
                </select>
              </div>
              <small className="text-muted">
                Provide the Method (default GET)
              </small>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <MdAccessTimeFilled />
                </span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
                <span className="input-group-text" id="addon-wrapping">
                  Seconds
                </span>
              </div>
              <small className="text-muted">
                Provide the Timeout Seconds max 5 min 1<br />
                Timeout is the time in seconds upto which the server will wait
                for response
              </small>
              <br />
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                <label className="form-label">Success Codes</label>
              </span>
              <div
                className="card-body"
                style={{
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  borderRadius: "5px",
                }}
              >
                <div className="card-text">
                  <div className="input-group flex-nowrap align-items-center justify-content-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="200"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        200
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="201"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        201
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="202"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        202
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="203"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        203
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="204"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        204
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="205"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        205
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="206"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        206
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="207"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        207
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="208"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        208
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="226"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        226
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <small className="text-muted">Provide the Success codes</small>
            </div>
            <div className="row justify-content-end">
              <button className="col-4 btn btn-primary effect">
                <i>
                  {" "}
                  <IoAddCircleSharp />
                </i>{" "}
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ color: "red" }}>Not more than 5 Links allowed</p>
      )}
    </div>
  );
}

export default AddLinks;
