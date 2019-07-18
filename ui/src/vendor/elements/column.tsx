import * as React from "react";

interface Props {
  width: number | string;
  mainAxisAlignment: "space-between";
  children?: React.ReactChild | React.ReactChild[];
}

const generateStyle = (props: Props): React.CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: props.mainAxisAlignment,
  width: props.width
});

const Column: React.FC<Props> = props => <div style={generateStyle(props)} />;

export default Column;
