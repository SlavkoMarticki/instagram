import React from "react";
import Button from "../../../../common/buttons/Button";
import Input from "../../../../common/inputs/Input";
import Footer from "../../../../common/footer/Footer";
import "./createAccountStructure.css";

export default function CreateAccountStructure(){
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
                />
                 <Input 
                    placeholder = "Full name"
                    type="text"
                />
                 <Input 
                    placeholder = "Username"
                    type="text"
                />
                 <Input 
                    placeholder = "Password"
                    type="password"
                />
                <p className="createacc-policy-desc">People who use our service may hgave uploaded your contace information to Instagram.
                By signing up, you agree to our Terms</p>
                <Button 
                    content = "Sign Up"
                />
                <Footer />
            </div>
        </div>
    );
}