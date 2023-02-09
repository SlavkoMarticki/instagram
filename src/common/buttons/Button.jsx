import React from "react";
import "./button.css";

export default function Button(props){

    const {content, click, ...rest} = props;


    return (
        <button 
            className="button"
            {...rest}
            onClick={() => {click(true)}}
        > {content} </button>
    );
}