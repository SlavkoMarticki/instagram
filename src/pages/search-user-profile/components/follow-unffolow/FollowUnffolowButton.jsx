import React from "react";
import "./followUnfollowButton.css";

export default function FollowUnffolowButton(){
    return(
        <div className="follunfoll-button-holder">
            <button>Follow</button>
            <button>Unfollow</button>
        </div>
    );
}