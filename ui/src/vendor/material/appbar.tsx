import * as React from "react";
import { Row } from "../elements";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const AppBar: React.FC<Props> = ({ children }) => (
  <Row crossAxisAlignment="flex-start" mainAxisAlignment="space-between">
    {children}
  </Row>
);

export default AppBar;
