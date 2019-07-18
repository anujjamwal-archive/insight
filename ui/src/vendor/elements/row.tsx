import * as React from "react";

interface Props {
  height: number | string;
  mainAxisAlignment: "space-between";
  children?: React.ReactChild | React.ReactChild[];
}

const generateStyle = (props: Props): React.CSSProperties => ({
  height: props.height,
  display: "flex",
  flexDirection: "row",
  justifyContent: props.mainAxisAlignment
});

const Row: React.FC<Props> = props => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Row;
