import React, {useRef, useEffect} from "react";
import { Xwrapper } from "react-xarrows";

export default function Board({ children }) {
  const boardRef = useRef(null);
  
  useEffect(() => {
    const board = boardRef.current;
    const width = window.innerWidth - (window.innerWidth % 30);
    board.style.width = `${width}px`;
  }, [])
  
  const boardStyle = {
    height: "100%",
    backgroundSize: "30px 30px",
    backgroundImage: 
      "linear-gradient(to right, lightblue 1px, transparent 1px)," +
      "linear-gradient(to bottom, lightblue 1px, transparent 1px)"
  }
  return (
    <div ref={boardRef} className="board" style={boardStyle}>
      <Xwrapper>{children}</Xwrapper>
    </div>
  );
}
