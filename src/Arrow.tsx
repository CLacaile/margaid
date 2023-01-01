import React from "react";
import Xarrow, {refType} from "react-xarrows";

type ArrowProps = {
	start: refType,
	end: refType
}

export default function Arrow({ start, end }: ArrowProps) {
  return <Xarrow start={start} end={end} />;
}
