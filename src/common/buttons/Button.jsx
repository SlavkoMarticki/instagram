import React from "react";
import "./button.css";

export default function Button(props){

    const {content} = props;

    return (
        <button className="button"> {content} </button>
    );
}