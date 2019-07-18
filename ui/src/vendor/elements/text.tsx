import * as React from "react";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const Text: React.FC<Props> = props => <p>{props.children}</p>;

export default Text;
