import { Xwrapper } from "react-xarrows";

type BoardProps = {
  children: React.ReactNode
}

export default function Board({ children }: BoardProps) {
  const boardStyle = {
    height: "100%",
    width: "100%",
    backgroundSize: "30px 30px",
    backgroundImage: 
      "linear-gradient(to right, lightblue 1px, transparent 1px)," +
      "linear-gradient(to bottom, lightblue 1px, transparent 1px)"
  }
  return (
    <div className="board" style={boardStyle}>
      <Xwrapper>{children}</Xwrapper>
    </div>
  );
}
