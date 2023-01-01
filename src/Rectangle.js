import React, {useState} from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import ReactMarkdown from "react-markdown";
import Input from "./Input";

export default function Rectangle({ id, defaultPosition, text }) {
  const [isHover, setIsHover] = useState(false);
  const [isInputHidden, setIsInputHidden] = useState(true);
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
  
  // Create an empty lambda function that does nothing
  const emptyLambda = () => {};

  // Create an object that maps the 'h1' key to the string 'h6'
  // and all other keys to the emptyLambda function
  const allowedMdComponents = {
    h1: 'h6',
    p: emptyLambda
  };

  
  const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
   
   const handleClick = () => {
     setIsInputHidden(!isInputHidden);
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
          <ReactMarkdown children={text} components={allowedMdComponents}/>
        </div>
      </Draggable>
      <Input text={text} isHidden={isInputHidden}/>
    </>
  );
}
