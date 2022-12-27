import React from "react";
import "./story.css";
import img from "./img/img-test.jpg";

export default function Story(props){
    return (
        <div className="home-container">
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            <button className="storie-button">
                <img src={img} alt="" />
            </button>
            
        </div>
    );
}