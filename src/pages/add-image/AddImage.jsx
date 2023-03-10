import React, {useState} from "react";
import "./addImage.css";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase/firebase-config.js";
import { ref , uploadBytes} from "firebase/storage";
import store from "../../store/store";
  
export default function AddImage(){

    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const state = store.getState();

    const uploadImage = () => {
        if(image == null) return;
        const data = localStorage.getItem("loginUser");
        const loginUserEmail = JSON.parse(data);
        const imageRef = ref(storage, loginUserEmail.data.email +"/"+ image.name);
        uploadBytes(imageRef, image).then(() => {
            alert ("Image Uploaded");
            navigate("/userprofile");
        })
    }

    return (
        <>
            <div className="upload-image-input">
                <input 
                    type="file" 
                    onChange={(event) => {
                        setImage(event.target.files[0]);
                    }}
                />
            </div>
           <div className="upload-image-button">
                <button onClick={uploadImage}>
                    Upload
                </button>
                <button onClick={()=>{navigate("/userprofile")}}>
                    Go back
                </button>
           </div>
        </>
    );
}