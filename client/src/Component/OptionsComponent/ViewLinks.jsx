import React from "react";
import { useContext, useEffect, useState } from "react";
import MainState from "../../Context/MainState";
import { IoLinkSharp } from "react-icons/io5";
import getLinks from "../../Request/getLinks";
import deleteLink from "../../Request/deleteLink";
import SingleLink from "./SingleLink";
import { toast } from "react-hot-toast";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ViewLinks() {
  const { userData, modal, setmodal, delLinkId, setdelLinkId } =
    useContext(MainState);
  //local state for loading
  const [isloading, setisloading] = useState(true);
  //local state for link component
  const [linkComp, setlinkComp] = useState(<p>No Links,Please Add</p>);
  useEffect(() => {
    const getCheckData = () => {
      let checkobj;
      if (userData["checks"].length === 0) {
        checkobj = [];
        setisloading(false);
      } else {
        const checkobjpromise = userData["checks"].map((item) => {
          const res = getLinks(item, localStorage.getItem("token"));
          return res;
        });
        Promise.all(checkobjpromise).then((checkobj) => {
          setlinkComp(
            checkobj.map((item, index) => {
              return (
                <SingleLink
                  key={index}
                  id={item.id}
                  num={index + 1}
                  protocol={item.protocol}
                  method={item.method}
                  url={item.url}
                  successcode={item.successcode}
                  timeout={item.timeout}
                  linkState={item.state}
                />
              );
            })
          );

          setisloading(false);
        });
      }
    };
    getCheckData();
  }, []);
  const [popupInput, setpopupInput] = useState("");
  const closeModal = () => {
    setmodal(false);
    setpopupInput("");
    setdelLinkId("");
  };
  const popupinputHandler = (e) => {
    setpopupInput(e.target.value);
  };
  const deleteLinkHandler = async () => {
    if (popupInput.toLowerCase() === "delete") {
      //delete link
      const result = await toast.promise(
        deleteLink(delLinkId, localStorage.getItem("token")),
        {
          loading: "Deleting Link Wait!",
        }
      );
      if (result) {
        //deleted Successfully
        userData["checks"].splice(userData["checks"].indexOf(delLinkId), 1);
        toast.success("Link Deleted Successfully", { duration: 2000 });
      } else {
        toast.error("Cannot Delete Some thing went wrong!", {
          duration: 2000,
        });
      }
    }
    setmodal(false);
  };
  return (
    <>
      <Popup open={modal} onClose={closeModal} modal>
        <div>
          <div className="modal-body">
            <p>
              Type <b>delete</b> in the below textbox to delete the Link
            </p>
          </div>
          <div className="form-group flex-column">
            <div className="input-group mb-3 flex-row d-flex justify-content-start">
              <input
                type="text"
                className="form-control"
                placeholder="delete"
                onChange={popupinputHandler}
                value={popupInput}
              />
            </div>
            <div
              className="flex-row d-flex 
              justify-content-end"
            >
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteLinkHandler}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </Popup>
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
    </>
  );
}

export default ViewLinks;
