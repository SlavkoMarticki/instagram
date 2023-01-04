import React from "react";
import "./userMainInfo.css";
import img from "../../../home/components/stories/img/img-test.jpg";

export default function UserMainInfo(){

    return (
        <div className="user-main-info-container">
           <div className="user-image">
                <img src={img} alt="Loading..." />
           </div>
           <div className="posts-followers">
                <div className="post-followers-names">
                    <p>Posts</p>
                    <p>Followers</p>
                    <p>Following</p>
                </div>
                <div className="post-followers-numbers">
                    <p>23</p>
                    <p>311</p>
                    <p>350</p>
                </div>
           </div>
        </div>
    );
}