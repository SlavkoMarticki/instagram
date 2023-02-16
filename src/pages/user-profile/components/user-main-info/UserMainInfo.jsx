import React from "react";
import "./userMainInfo.css";
import img from "../../../home/components/stories/img/img-test.jpg";

export default function UserMainInfo(props){

    const {
        following, 
        followers,
        images,
        profileImg
    } = props;

    console.log(profileImg);
    return (
        <div className="user-main-info-container">
           <div className="user-image">
                <img src={profileImg} alt="Loading..." />
           </div>
           <div className="posts-followers">
                <div className="post-followers-names">
                    <p>Posts</p>
                    <p>Followers</p>
                    <p>Following</p>
                </div>
                <div className="post-followers-numbers">
                    <p>{images?.length}</p>
                    <p>{followers?.length}</p>
                    <p>{following?.length}</p>
                </div>
           </div>
        </div>
    );
}