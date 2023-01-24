import React from "react";
import { createPortal } from "react-dom";
import Buttons from "../../common/buttons/Button"; 
import "./openImage.css";
import store from "../../store/store";

export default function OpenImage(props) {
    
    const {click, url} = props;

    const deleteImg = (imgUrl) => {
        console.log(imgUrl);
        store.dispatch({
            type: "deleteImage",
            deleteImgUrl: imgUrl
        })
    }

    return createPortal(
        <div className="background-color" onClick={() => {click(false)}}>
     
            <img 
                src={url} 
                alt="Loading..." 
            />
           <div className="clicked-image-button">
                <button>Set as profile image</button>
           </div>
           <div className="clicked-image-button" >
               
                <button onClick={() => {deleteImg(url)}}>Delete Image</button>
           </div>
        </div>
    , document.getElementById("openImage") );
}