import React from "react";
import "./userProfileHeader.css";
import "../../../../common/body/body.css";
import addImg from "../../../../common/images/plus.png";
import goBack from "../../../../common/images/arrow.png"
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
                    src={addImg} 
                    alt="Loading..." 
                />
            </button> :  <button className="add-image-button" onClick={() => {navigate("/search")}}>
                <img src={goBack} alt="Loading" />
            </button>}
    
        </div>
    );
}