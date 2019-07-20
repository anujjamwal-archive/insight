import * as React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
}

const Spacer: React.FC<Props> = ({ height, width }) => (
  <div style={{ height: height, width: width }} />
);

export default Spacer;
