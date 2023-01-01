import React, {useRef, useEffect} from "react";
import ReactMarkdown from "react-markdown";

export default function Input({text, isHidden}) {
    const inputRef = useRef(null);
  
  useEffect(() => {
    const input = inputRef.current;
    const width = window.innerWidth - (window.innerWidth % 30);
    input.style.width = `${width}px`;
  }, [])
  
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
    
    const closeBtnStyle = {
        position: "absolute",
        top: 0,
        right: 10
    }
    
    return (
        <div ref={inputRef} className="input" style={inputStyle}>
            <button className="closeBtn" style={closeBtnStyle}>X</button>
            <ReactMarkdown children={text}>
            </ReactMarkdown>
        </div>
    )
}