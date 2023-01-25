import React from "react";
import "./userPicture.css";
import OpenImage from "../../../../portals/open-image/OpenImage";
import { useState } from "react";


export default function UserPicture(props){

    const {images} = props;
    const [click, setClick] = useState(false);
    const [clickedImage, setClickedImage] = useState("");
    const [clickedImgName, setClickedImgName] = useState("");

   
    return (
        <div className="user-picture-container">
            {images?.map((image) => {
               return <img 
                    src={image.imgUrl} 
                    alt="Loading..." 
                    className="user-picture"
                    onClick={() => { 
                        setClickedImage(image.imgUrl)
                        setClickedImgName(image.imgName)
                        setClick(true) 
                    }}
                />
            })
            }
            {click != false ? 
                <OpenImage 
                    click={setClick}
                    url={clickedImage}
                    name={clickedImgName}
                />
                 : <></>}
        </div>
    );
}