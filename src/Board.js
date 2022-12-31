import React, { Children } from "react";
import Rectangle from "./Rectangle";
import Arrow from "./Arrow";
import { Xwrapper } from "react-xarrows";

export default function Board({ children }) {
  return (
    <div className="board">
      <Xwrapper>{children}</Xwrapper>
    </div>
  );
}
