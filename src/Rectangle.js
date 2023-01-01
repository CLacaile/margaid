import React, {useState} from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import ReactMarkdown from "react-markdown";
import Editor from "./Editor";

export default function Rectangle({ id, defaultPosition, text }) {
  const [isHover, setIsHover] = useState(false);
  const [isEditorHidden, setIsEditorHidden] = useState(true);
  const updateXarrow = useXarrow();
  
  const rectStyle = {
    width: "90px",
    height: "90px",
    backgroundColor: isHover ? "lightblue" : "#fefefe",
    border: "1px solid lightblue",
    borderRadius: "5px",
    opacity: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px"
  }
  
  const componentsMapping = {
    h1: 'h6'
  }
  
  const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
   
   const handleClick = () => {
     setIsEditorHidden(!isEditorHidden);
   }
  
  return (
    <>
      <Draggable
        defaultPosition={defaultPosition}
        grid={[30, 30]}
        bounds="parent"
        onDrag={updateXarrow}
        onStop={updateXarrow}
      >
        <div 
          id={id} 
          className="rectangle" 
          style={rectStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <ReactMarkdown children={text} components={componentsMapping} allowedElements={['h1']}/>
        </div>
      </Draggable>
      <Editor text={text} isHidden={isEditorHidden}/>
    </>
  );
}
