import React, {useState} from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import ReactMarkdown from "react-markdown";
import {NormalComponents} from "react-markdown/lib/complex-types";
import Input from "./Input";

type Position = {
  x: number,
  y: number
}

type RectangleProps = {
  id: string,
  defaultPosition: Position,
  text: string
}

export default function Rectangle({ id, defaultPosition, text }: RectangleProps) {
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

  // Create an object with the NormalComponents type that maps the 'h1' key to the string 'h6'
  // and all other keys to the emptyLambda function
  const allowedMdComponents: Partial<NormalComponents> = {
    h1: 'h6',
    ...Object.fromEntries(
      // Create an array of key-value pairs where each key is a key of the JSX.IntrinsicElements object
      // and each value is the emptyLambda function
      // @ts-expect-error
      Object.entries(JSX.IntrinsicElements).map(([k]) => [k, emptyLambda])
    )
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
          {/* @ts-expect-error */}
          <ReactMarkdown children={text} components={allowedMdComponents}/>
        </div>
      </Draggable>
      <Input text={text} isHidden={isInputHidden}/>
    </>
  );
}
