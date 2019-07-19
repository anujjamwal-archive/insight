import * as React from "react";
import { Row } from "../elements";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactChild | React.ReactChild[];
}

const AppBar: React.FC<Props> = ({ style, children }) => (
  <Row
    crossAxisAlignment="flex-start"
    mainAxisAlignment="space-between"
    crossAxisSize="50px"
    style={{
      backgroundColor: "White",
      boxShadow: "rgba(0, 0, 0, 0.20) 0px 1px 20px",
      zIndex: 2,
      ...(style || {})
    }}
  >
    {children}
  </Row>
);

export default AppBar;
