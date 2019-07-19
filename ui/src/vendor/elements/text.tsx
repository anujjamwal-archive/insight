import * as React from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactChild | React.ReactChild[];
}

const Text: React.FC<Props> = props => (
  <p style={props.style}>{props.children}</p>
);

export default Text;
