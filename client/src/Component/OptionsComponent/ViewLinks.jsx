import React from "react";
import { useContext, useEffect, useState } from "react";
import MainState from "../../Context/MainState";
import { IoLinkSharp } from "react-icons/io5";
import getLinks from "../../Request/getLinks";

function ViewLinks() {
  const { userData } = useContext(MainState);
  //localState for check Data
  const [checkData, setcheckData] = useState([]);
  const [checkJSX, setcheckJSX] = useState(<p></p>);
  useEffect(() => {
    const showData = async () => {
      if (checkData.length === 0) {
        await setcheckJSX(<p>No check Found</p>);
      } else {
        await setcheckJSX(
          checkData.map((item) => {
            return <p>{item.id}</p>;
          })
        );
      }
      const getCheckData = async () => {
        let checkobj;
        if (userData["checks"].length === 0) {
          setcheckData(checkobj);
        } else {
          let checkobj = await Promise.all(
            userData["checks"].map(async (item) => {
              const res = await getLinks(item, localStorage.getItem("token"));
              return res;
            })
          );
          setcheckData(checkobj);
          showData();
        }
      };
      getCheckData();
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoLinkSharp size="20" />
          &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            View Links
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-text">{checkJSX}</div>
      </div>
    </div>
  );
}

export default ViewLinks;
