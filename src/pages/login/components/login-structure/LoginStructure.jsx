import React from "react";
import Button from "../../../../common/buttons/Button";
import Input from "../../../../common/inputs/Input";
import Footer from "../../../../common/footer/Footer";
import "./loginStructure.css";

export default function LoginStructure(){
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
                />

        
                <Input 
                    placeholder = "Password"
                    type="password"
                />
                <p className="login-policy-desc">People who use our service may hgave uploaded your contace information to Instagram.
                By signing up, you agree to our Terms</p>
                <Button 
                    content = "Log in"
                />
                <Footer />
            </div>
        </div>
    );
}