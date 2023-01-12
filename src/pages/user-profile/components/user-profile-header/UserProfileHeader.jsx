import React from "react";
import "./userProfileHeader.css";
import "../../../../common/body/body.css";
import img from "../../../../common/images/plus.png";
import { useNavigate } from "react-router-dom";

export default function UserProfileHeader(props){
    const navigate = useNavigate();
    const {name, addImage} = props;

    return (
        <div className="user-profile-header">
            <p className="user-name">{name}</p>
         {  addImage != true ? <button 
                className="add-image-button"
                onClick={() => {navigate("/addimage")}}
                >
                <img 
                    src={img} 
                    alt="Loading..." 
                />
            </button> : <></>}
        </div>
    );
}