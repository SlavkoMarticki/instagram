import React from "react";
import "./userPicture.css";
import OpenImage from "../../../../portals/open-image/OpenImage";
import { useState } from "react";


export default function UserPicture(props){

    const {urls} = props;
    const [click, setClick] = useState(false);
    const [clickedImage, setClickedImage] = useState("");

    
    return (
        <div className="user-picture-container">
            {urls?.map((url) => {
               return <img 
                    src={url} 
                    alt="Loading..." 
                    className="user-picture"
                    onClick={() => { 
                        setClickedImage(url)
                        setClick(true) 
                    }}
                />
            })
            }
            {click != false ? 
                <OpenImage 
                    click={setClick}
                    url={clickedImage}
                />
                 : <></>}
        </div>
    );
}