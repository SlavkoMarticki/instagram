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


export default function Search(){
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [user, setUser] = useState([]);
    
    const ref = collection(db, "users");

    const searchUser = () => {
        
        const q = query(ref, where("user_name", "==", userInput));
        onSnapshot(q, (snapshot) => {
            snapshot.docs.map((doc) => {
                localStorage.setItem("searchUserData", JSON.stringify({...doc.data()}));
                setUser([{...doc.data()}]);   
            })
        });
    }
    
    const seeSearchUserData = (user_name, email) => {
        console.log(email);
        store.dispatch({
            type: "searchUser",
            userName: user_name,
            userEmail: email
        })
        setTimeout(() => {navigate("/searchuserprofile");}, 3000)
        
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
                            <button onClick={() => {seeSearchUserData(e.user_name, e.email);}}>
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