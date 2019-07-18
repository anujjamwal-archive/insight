import * as React from "react";
import { AppBar } from "../../vendor/material";
import { Text } from "../../vendor/elements";

interface Props {
  title: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Layout: React.FC<Props> = props => (
  <div>
    <AppBar>
      <Text>{props.title}</Text>
    </AppBar>
    <div>{props.children}</div>
  </div>
);

export default Layout;
