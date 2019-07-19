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
  color?: string;
  marginLeft?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginRight?: number | string;
  paddingLeft?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingRight?: number | string;
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
  return {
    ...mainAxis,
    ...crossAxis,
    backgroundColor: props.color,
    display: "flex",
    flexDirection: "column",
    marginLeft: props.marginLeft || 0,
    marginTop: props.marginTop || 0,
    marginBottom: props.marginBottom || 0,
    marginRight: props.marginRight || 0,
    paddingLeft: props.paddingLeft || 0,
    paddingTop: props.paddingTop || 0,
    paddingBottom: props.paddingBottom || 0,
    paddingRight: props.paddingRight || 0,
    justifyContent: props.mainAxisAlignment,
    alignItems: props.crossAxisAlignment
  };
};

const Column: React.FC<Props> = props => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Column;
