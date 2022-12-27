import React from "react";
import "./footer.css"
import home from "../../../../common/images/home.png";
import search from "../../../../common/images/search.png";
import user from "../stories/img/img-test.jpg";

export default function Footer(){
    return (
        <div className="create-accout-footer">
            <button>
                <img src={home} alt="" />
            </button>
            <button>
                <img src={search} alt="" />
            </button>
            <button className="userPic">
                <img src={user} alt="" />
            </button>
        </div>
    );
}