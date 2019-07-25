import * as React from "react";
import { AppBar, Icon } from "../../vendor/material";
import { Text, Column, Row, Spacer } from "../../vendor/elements";

interface Props {
  title: string;
  backgroundColor?: string;
  children: React.ReactChild;
}

const Layout: React.FC<Props> = props => (
  <Column
    mainAxisAlignment="flex-start"
    mainAxisSize="max"
    crossAxisSize="max"
    style={{ backgroundColor: props.backgroundColor || "#fafafa" }}
  >
    <AppBar style={{ paddingLeft: "15px", paddingRight: "15px" }}>
      <Row
        mainAxisAlignment="flex-start"
        crossAxisAlignment="center"
        style={{ alignSelf: "center" }}
      >
        <Icon icon="menu" size={24} status="active-unfocused" />
        <Spacer width="10px" />
        <Text>{props.title}</Text>
      </Row>
      <Row
        mainAxisAlignment="flex-end"
        crossAxisAlignment="center"
        style={{ alignSelf: "center" }}
      >
        <Icon icon="share" size={20} status="active-unfocused" />
        <Spacer width="10px" />
        <Icon icon="account_circle" size={24} status="active-unfocused" />
      </Row>
    </AppBar>
    {props.children}
  </Column>
);

export default Layout;
