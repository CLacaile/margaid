import React from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";

export default function Rectangle({ id, defaultPosition, text }) {
  const updateXarrow = useXarrow();
  return (
    <Draggable
      defaultPosition={defaultPosition}
      grid={[30, 30]}
      bounds="parent"
      onDrag={updateXarrow}
      onStop={updateXarrow}
    >
      <div id={id} className="rectangle">
        {text}
      </div>
    </Draggable>
  );
}
