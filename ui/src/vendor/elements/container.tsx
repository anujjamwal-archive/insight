import * as React from "react";
import { Color } from "csstype";

interface Props {
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
}

const generateStyle = (props: Props): React.CSSProperties => ({
  marginLeft: props.marginLeft || 0,
  marginTop: props.marginTop || 0,
  marginBottom: props.marginBottom || 0,
  marginRight: props.marginRight || 0,
  paddingLeft: props.paddingLeft || 0,
  paddingTop: props.paddingTop || 0,
  paddingBottom: props.paddingBottom || 0,
  paddingRight: props.paddingRight || 0,
  backgroundColor: props.color,
  position: "relative"
});

const Container: React.FC<Props> = props => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Container;
