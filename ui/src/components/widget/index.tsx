import * as React from "react";
import { Container, Column, Row, Text } from "../../vendor/elements";
import { Icon } from "../../vendor/material";

interface Props {
  width: number;
  height: number;
  title: string;
  backgroundColor?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Widget: React.FC<Props> = ({
  title,
  width,
  height,
  children,
  backgroundColor
}) => (
  <Container
    width={width}
    height={height}
    plane="content"
    color={backgroundColor || "white"}
  >
    <Column mainAxisAlignment="flex-start" mainAxisSize="max">
      <Row
        mainAxisAlignment="space-between"
        crossAxisSize="40px"
        crossAxisAlignment="center"
        style={{
          paddingTop: "5px",
          paddingLeft: "10px",
          paddingBottom: "5px",
          paddingRight: "10px"
        }}
      >
        <Text>{title}</Text>
        <Icon icon="refresh" status="active-unfocused" size="md-24" />
      </Row>
      <Row mainAxisAlignment="flex-start" crossAxisSize="max">
        {children}
      </Row>
    </Column>
  </Container>
);

export default Widget;
