import * as React from "react";
import { Container, Column, Row, Text } from "../../vendor/elements";
import { Icon } from "../../vendor/material";

interface Props {
  width: string | number;
  height: string | number;
  title: string;
  onRefresh: () => void;
  isLoading: boolean;
  backgroundColor?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Widget: React.FC<Props> = ({
  title,
  width,
  height,
  isLoading,
  onRefresh,
  children,
  backgroundColor
}) => (
  <Container
    className="widget"
    width={width}
    height={height}
    maxWidth="100%"
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
        <Icon
          icon="sync"
          status="active-unfocused"
          size={24}
          spin={isLoading}
          onClick={isLoading ? undefined : onRefresh}
        />
      </Row>
      <Row mainAxisAlignment="flex-start" crossAxisSize="max">
        {children}
      </Row>
    </Column>
  </Container>
);

export default Widget;
