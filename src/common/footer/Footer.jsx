import React from "react";
import "./footer.css"
import home from "../images/home.png";
import search from "../images/search.png";
import user from "../../pages/home/components/stories/img/img-test.jpg";
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
  
    return (
        <div className="create-accout-footer">
            <button onClick={() => {navigate("/home")}}>
                <img src={home} alt="" />
            </button>
            <button onClick={() => {navigate("/search")}}>
                <img src={search} alt="" />
            </button>
            <button className="userPic" onClick={() => {navigate("/userprofile")}}>
                <img src={user} alt="" />
            </button>
        </div>
    );
}