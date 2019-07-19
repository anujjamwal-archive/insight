import * as React from "react";
import { AppBar, Icon } from "../../vendor/material";
import { Text, Column, Row } from "../../vendor/elements";

interface Props {
  title: string;
  backgroundColor?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Layout: React.FC<Props> = props => (
  <Column
    mainAxisAlignment="flex-start"
    mainAxisSize="max"
    crossAxisSize="max"
    color={props.backgroundColor || "#fafafa"}
  >
    <AppBar style={{ paddingLeft: "15px", paddingRight: "15px" }}>
      <Row
        mainAxisAlignment="flex-start"
        crossAxisAlignment="center"
        style={{ alignSelf: "center" }}
      >
        <Icon icon="menu" size="md-24" status="active-unfocused" />
        <Text>{props.title}</Text>
      </Row>
      <Row mainAxisAlignment="flex-end" style={{ alignSelf: "center" }}>
        <Icon icon="account_circle" size="md-24" status="active-unfocused" />
      </Row>
    </AppBar>
    <Column
      mainAxisAlignment="flex-start"
      paddingTop="10px"
      paddingLeft="10px"
      paddingBottom="10px"
      paddingRight="10px"
    >
      {props.children}
    </Column>
  </Column>
);

export default Layout;
