import React, { useState } from "react";
import Button from "../../../../common/buttons/Button";
import Input from "../../../../common/inputs/Input";
import CopyRight from "../../../../common/copy-right/CopyRight";
import "./loginStructure.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import store from "../../../../store/store";


export default function LoginStructure(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClick] = useState(false);

    const login = () => {
        try {
           
            const user =  signInWithEmailAndPassword(auth, email, password);
            console.log("uspesno");
            store.dispatch({
                type: "getUser",
                email: email 
            })
            setTimeout(() => {
                navigate("/home");
            }, 1000);
           
        } catch (error) {
            console.log(error.message);
        }
    }

    if(click){
        setClick(false);
        login();
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Instagram</h1>
                             
                <Button 
                    content = "Log in with Facebook"
                />
                 <hr />
                <Input 
                    placeholder = "Mobile number or Email"
                    type="text"
                    inputValue = {setEmail}
                />

        
                <Input 
                    placeholder = "Password"
                    type="password"
                    inputValue = {setPassword}

                />
                <p className="login-policy-desc">People who use our service may hgave uploaded your contace information to Instagram.
                By signing up, you agree to our Terms</p>
                <Button 
                    content = "Log in"
                    click = {setClick}
                />
                <CopyRight />
            </div>
        </div>
    );
}