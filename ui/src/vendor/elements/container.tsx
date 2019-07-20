import * as React from "react";
import { Color } from "csstype";

interface Props {
  className?: string;
  width: number | string;
  height: number | string;
  marginLeft?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginRight?: number | string;
  paddingLeft?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingRight?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
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
    maxHeight: props.maxHeight,
    maxWidth: props.maxWidth,
    overflow: "hidden",
    display: "flex"
  };
};

const Container: React.FC<Props> = props => (
  <div className={props.className} style={generateStyle(props)}>
    {props.children}
  </div>
);

export default Container;
