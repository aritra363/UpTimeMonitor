import React from "react";
import { useContext, useEffect, useState } from "react";
import MainState from "../../Context/MainState";
import { IoUnlinkSharp } from "react-icons/io5";
import getLinks from "../../Request/getLinks";
import "../../CStyling/SingleLink.css";

function SingleLink({ id, num }) {
  useEffect(() => {}, []);

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoUnlinkSharp size="20" />
          &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {`Link #${num}`}
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-text">{`Link id : ${id}`}</div>
      </div>
    </div>
  );
}

export default SingleLink;
