import React from "react";
import "../../../user-profile/components/user-pictures/userPicture.css"
import OpenImage from "../../../../portals/open-image/OpenImage";
import { useState } from "react";


export default function UserImages(props){

    const {images} = props;
    const [click, setClick] = useState(false);
    const [clickedImage, setClickedImage] = useState("");
    const [clickedImgName, setClickedImgName] = useState("");

    console.log(images);
    return (
        <div className="user-picture-container">
            {images?.map((image) => {
               return <img 
                    src={image} 
                    alt="Loading..." 
                    className="user-picture"
                    onClick={() => { 
                        setClickedImage(image)
                        setClickedImgName(image.imgName)
                        setClick(true) 
                    }}
                />
            })
            }
            {click != false ? 
                <OpenImage 
                    click={setClick}
                    url={clickedImgName}
                    name={clickedImgName}
                />
                 : <></>}
        </div>
    );
}