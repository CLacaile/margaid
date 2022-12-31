import React, {useState} from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
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
    justifyContent: "center"
  }
  
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
          {text}
        </div>
      </Draggable>
      <Input text={text} isHidden={isInputHidden}/>
    </>
  );
}
