import React, {useState} from "react";
import "./search.css";
import arrow from "../../common/images/arrow.png";
import searchImg from "../../common/images/search.png";
import { useNavigate } from "react-router-dom";
import image from "../home/components/stories/img/img-test.jpg"
import { db } from "../../firebase/firebase-config";
import store from "../../store/store";
import {
    query,
    where,
    collection,
    onSnapshot
} from "firebase/firestore";
import {
    ref,
    listAll,
    getDownloadURL
} from "firebase/storage";

export default function Search(){
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [user, setUser] = useState([]);
    //const user = []
    const ref = collection(db, "users");

    const searchUser = () => {
        console.log(userInput);
        const q = query(ref, where("user_name", "==", userInput));
        onSnapshot(q, (snapshot) => {
            snapshot.docs.map((doc) => {
                setUser([{...doc.data()}]);
               
            })
            console.log(user);
        });
    }
    
    const seeSearchUserData = () => {
        
        store.dispatch({
            type: "searchUser",
            userName: userInput
        })
        navigate("/searchuserprofile");
    }

    return (
        <div>
            <div className="header-search">
                <input 
                    onChange={(e) => {setUserInput(e.target.value)}}
                    type="text" 
                    placeholder="Search..."
                />
                <div className="button-holder">
                    <button onClick={() => {searchUser()}}>
                        <img src={searchImg} alt="Loading..." />
                    </button>
                    <button onClick={() => {
                        
                            navigate("/home")}
                        }>
                        <img src={arrow} alt="Loading..." />
                    </button>
                </div>
                
            </div>
            <div className="search-result">
                {user.map((e) => {
                        return (
                        <div className="result">
                            <button onClick={() => {seeSearchUserData();}}>
                                <img src={image} alt="" />
                            </button>
                            <p>{e.user_name}</p>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}