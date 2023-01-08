import React, {useState} from "react";
import Button from "../../../../common/buttons/Button";
import Input from "../../../../common/inputs/Input";
import CopyRight from "../../../../common/copy-right/CopyRight";
import "./createAccountStructure.css";
import { collection, addDoc } from "firebase/firestore";
import { db, auth} from "../../../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function CreateAccountStructure(){
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const userCollectionRef = collection(db, "users");


    const createUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message);
        }

        await addDoc(userCollectionRef ,{
            email: email,
            followers: [],
            following: [],
            full_name: fullName,
            password: password,
            user_name: userName
        });
    }


    if(click == true){
        setClick(false);
        createUser();
        navigate("/");

    }

    return (
        <div className="createacc-container">
            <div className="createacc-box">
                <h1 className="createacc-title">Instagram</h1>
                <p className="createacc-desc">Sign up to see photos and videos from your friends</p>
               
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
                    placeholder = "Full name"
                    type="text"
                    inputValue = {setFullName}
                />
                 <Input 
                    placeholder = "Username"
                    type="text"
                    inputValue={setUserName}
                />
                 <Input 
                    placeholder = "Password"
                    type="password"
                    inputValue={setPassword}
                />
                <p className="createacc-policy-desc">People who use our service may hgave uploaded your contace information to Instagram.
                By signing up, you agree to our Terms</p>
                <Button 
                    content = "Sign Up"
                    click = {setClick}
                />
                <CopyRight />
            </div>
        </div>
    );
}