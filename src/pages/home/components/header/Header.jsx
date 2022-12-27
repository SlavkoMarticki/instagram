import React from "react";
import "./header.css";
import heart from "../../../../common/images/heart.png";
import plus from "../../../../common/images/plus.png";
import arrow from "../../../../common/images/arrow.png";

export default function Header(){
    return (
        <div className="container">
            <div className="title">
                <h1>Instagram</h1>
            </div>
            <div className="button-holder">
                <button className="button-images">
                    <img src={plus} alt="Loading"/>
                </button>
                <button className="button-images">
                    <img src={heart} alt="Loading" />
                </button>
                <button className="button-images">
                    <img src={arrow} alt="Loading" />
                </button>
            </div>

        </div>
    );
}