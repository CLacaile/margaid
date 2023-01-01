import React, {CSSProperties, ReactNode} from "react";
import ReactMarkdown from "react-markdown";

type InputProps = {
    text: ReactNode,
    isHidden: Boolean
}

export default function Input({text, isHidden}: InputProps) {
    const inputStyle: CSSProperties = {
        width: "100%",
        height: "30%",
        backgroundColor: "white",
        border: "1px solid lightblue",
        borderRadius: "5px",
        position: "fixed",
        bottom: 0,
        padding: "10px",
        opacity: isHidden ? "0" : "0.8",
        visibility: isHidden ? "hidden" : "visible",
        transition: "opacity .2s ease-in-out",
    }
    
    return (
        <div className="input" style={inputStyle}>
            {/* ignore the children type incompatibility error for now */}
            {/* see https://github.com/remarkjs/react-markdown/issues/711 */}
            {/* @ts-expect-error */}
            <ReactMarkdown children={text} />
            {text}
        </div>
    )
}