import React from "react";
import "./followUnfollowButton.css";
import store from "../../../../store/store";

export default function FollowUnffolowButton(){

    const follow = () => {
        store.dispatch({
            type: "follow"
        })
    }
    const unfollow = () => {
        store.dispatch({
            type: "unfollow"
        })

    }

    return(
        <div className="follunfoll-button-holder">
            <button onClick={follow} >Follow</button>
            <button onClick={unfollow} >Unfollow</button>
        </div>
    );
}