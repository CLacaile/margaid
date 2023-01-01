import React from "react";
import ReactMarkdown from "react-markdown";

export default function Input({text, isHidden}) {
    const inputStyle = {
        width: "100%",
        height: "30%",
        backgroundColor: "white",
        opacity: "80%",
        border: "1px solid lightblue",
        borderRadius: "5px",
        position: "fixed",
        bottom: 0,
        padding: "10px",
        opacity: isHidden ? "0" : "0.8",
        visibility: isHidden ? "hidden" : "visible",
        transition: "opacity .2s ease-in-out"
    }
    return (
        <div className="input" style={inputStyle}>
            <ReactMarkdown children={text}>
            </ReactMarkdown>
            {text}
        </div>
    )
}