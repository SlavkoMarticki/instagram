import React from "react";
import "./input.css";


export default function Input(props){
    
    const {
        placeholder,
        type
    } = props;

    return (
        <input 
            className="input"
            placeholder={placeholder}
            type={type}
        />
    );
}