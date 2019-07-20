import * as React from "react";
import { Row, Text } from "../../vendor/elements";
import { Icon } from "../../vendor/material";

interface Props {}

const TimeRange: React.FC<Props> = ({}) => (
  <Row
    mainAxisAlignment="space-between"
    mainAxisSize="200px"
    crossAxisAlignment="center"
    style={{
      paddingLeft: 10,
      paddingRight: 5,
      borderBottom: "1px solid #aaa",
      cursor: "pointer"
    }}
  >
    <Text>06/24/2019 - 10/24/2019</Text>
    <Icon icon="date_range" size="md-18" status="active-unfocused" />
  </Row>
);

export default TimeRange;
