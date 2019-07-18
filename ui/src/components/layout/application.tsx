import * as React from "react";
import { AppBar } from "../../vendor/material";
import { Text } from "../../vendor/elements";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const Layout: React.FC<Props> = props => (
  <div>
    <AppBar>
      <Text>Insight</Text>
    </AppBar>
    <div>{props.children}</div>
  </div>
);

export default Layout;
