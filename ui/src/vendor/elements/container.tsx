import * as React from "react";
import { Color } from "csstype";

interface Props {
  width: number;
  height: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingRight?: number;
  color?: Color;
  children?: React.ReactChild;
  plane?: "content";
}

const generateStyle = (props: Props): React.CSSProperties => {
  const style =
    props.plane === "content"
      ? { boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }
      : {};

  return {
    ...style,
    marginLeft: props.marginLeft || 0,
    marginTop: props.marginTop || 0,
    marginBottom: props.marginBottom || 0,
    marginRight: props.marginRight || 0,
    paddingLeft: props.paddingLeft || 0,
    paddingTop: props.paddingTop || 0,
    paddingBottom: props.paddingBottom || 0,
    paddingRight: props.paddingRight || 0,
    backgroundColor: props.color,
    position: "relative",
    height: props.height,
    width: props.width,
    overflow: "hidden",
    display: "flex"
  };
};

const Container: React.FC<Props> = props => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Container;
