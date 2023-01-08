import React from "react";
import "./userPicture.css";


export default function UserPicture(props){

    const {urls} = props;
    
    return (
        <div className="user-picture-container">
            {urls?.map((url) => {
               return <img 
                    src={url} 
                    alt="Loading..." 
                    className="user-picture"
                />
            })
            }
            
        </div>
    );
}