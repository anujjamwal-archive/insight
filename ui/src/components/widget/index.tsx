import * as React from "react";
import { Container, Column, Row, Text } from "../../vendor/elements";

interface Props {
  width: number;
  height: number;
  title: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Widget: React.FC<Props> = ({ title, width, height, children }) => (
  <Container width={width} height={height} plane="content">
    <Column mainAxisAlignment="flex-start" mainAxisSize="max">
      <Row
        mainAxisAlignment="flex-start"
        crossAxisSize="40px"
        crossAxisAlignment="center"
      >
        <Text>{title}</Text>
      </Row>
      <Row mainAxisAlignment="flex-start" crossAxisSize="max">
        {children}
      </Row>
    </Column>
  </Container>
);

export default Widget;
