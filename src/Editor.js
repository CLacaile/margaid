import React, {useRef, useEffect} from "react";
import ReactMarkdown from "react-markdown";

export default function Editor({text, isHidden}) {
    const editorRef = useRef(null);
  
  useEffect(() => {
    const editor = editorRef.current;
    const width = window.innerWidth - (window.innerWidth % 30);
    editor.style.width = `${width}px`;
  }, [])
  
    const editorStyle = {
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
        <div ref={editorRef} className="editor" style={editorStyle}>
            <button className="closeBtn" style={closeBtnStyle}>X</button>
            <ReactMarkdown children={text}>
            </ReactMarkdown>
        </div>
    )
}