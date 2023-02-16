import React from "react";
import { createPortal } from "react-dom";
import Buttons from "../../common/buttons/Button"; 
import "./openImage.css";
import store from "../../store/store";

export default function OpenImage(props) {
    
    const {click, url, name} = props;

    const setProfileImg = (imgUrl) => {
        localStorage.setItem("loginUserProfileImage", JSON.stringify(imgUrl))
    }

    const deleteImg = (imgName) => {
        store.dispatch({
            type: "deleteImage",
            name: imgName
        })
    }

    return createPortal(
        <div className="background-color" onClick={() => {click(false)}}>
     
            <img 
                src={url} 
                alt="Loading..." 
            />
           <div className="clicked-image-button">
                <button onClick={() => {setProfileImg(url)}}>Set as profile image</button>
           </div>
           <div className="clicked-image-button" >
               
                <button onClick={() => {deleteImg(name)}}>Delete Image</button>
           </div>
        </div>
    , document.getElementById("openImage") );
}