import React from "react";
import { useContext, useEffect, useState } from "react";
import MainState from "../../Context/MainState";
import { IoLinkSharp } from "react-icons/io5";
import getLinks from "../../Request/getLinks";
import SingleLink from "./SingleLink";

function ViewLinks() {
  const { userData } = useContext(MainState);
  //local state for loading
  const [isloading, setisloading] = useState(true);
  //local state for link component
  const [linkComp, setlinkComp] = useState(<p>Not Found</p>);
  useEffect(() => {
    const getCheckData = () => {
      let checkobj;
      if (userData["checks"].length === 0) {
        checkobj = [];
      } else {
        const checkobjpromise = userData["checks"].map((item) => {
          const res = getLinks(item, localStorage.getItem("token"));
          return res;
        });
        Promise.all(checkobjpromise).then((checkobj) => {
          setlinkComp(
            checkobj.map((item, index) => {
              return <SingleLink key={index} id={item.id} num={index + 1} />;
            })
          );

          setisloading(false);
        });
      }
    };
    getCheckData();
  }, []);
  useEffect(() => {}, []);
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
      <div
        className="card-body"
        style={{ overflow: "scroll", maxHeight: "75vh" }}
      >
        {isloading ? <p>Loading</p> : linkComp}
      </div>
    </div>
  );
}

export default ViewLinks;
