import React, { createElement } from "react";
import "./styles.css";
import Board from "./Board";
import Rectangle from "./Rectangle";
import Arrow from "./Arrow";

const data = {
  rectangles: [
    {
      id: "rect1",
      defaultPosition: { x: 0, y: 0 },
      text: "1"
    },
    {
      id: "rect2",
      defaultPosition: { x: 90, y: 90 },
      text: "2"
    }
  ],
  arrows: [{ start: "rect1", end: "rect2" }]
};

export default function App() {
  return (
    <div className="App">
      <Board>
        {data.rectangles.map((rectangle) =>
          createElement(Rectangle, { ...rectangle })
        )}
        {data.arrows.map((arrow) => createElement(Arrow, { ...arrow }))}
      </Board>
    </div>
  );
}
