import React from "react";
import "./button.css";

export default function Button(props){

    const {content, click} = props;


    return (
        <button 
            className="button"
            onClick={() => {click(true)}}
        > {content} </button>
    );
}