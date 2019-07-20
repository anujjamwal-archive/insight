import * as React from "react";

interface Props {
  crossAxisSize?: "max" | string;
  crossAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  mainAxisSize?: "max" | string;
  mainAxisAlignment:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  style?: React.CSSProperties;
  children?: React.ReactChild | React.ReactChild[];
}

const generateStyle = (props: Props): React.CSSProperties => {
  const mainAxis =
    props.mainAxisSize === "max"
      ? { flex: 1 }
      : props.mainAxisSize === undefined
      ? {}
      : { height: props.mainAxisSize };
  const crossAxis =
    props.crossAxisSize === undefined
      ? {}
      : { width: props.crossAxisSize === "max" ? "100%" : props.crossAxisSize };

  const style = props.style || {};

  return {
    ...style,
    ...mainAxis,
    ...crossAxis,
    display: "flex",
    flexDirection: "column",
    justifyContent: props.mainAxisAlignment,
    alignItems: props.crossAxisAlignment
  };
};

const Column: React.FC<Props> = props => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Column;
