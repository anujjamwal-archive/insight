import * as React from "react";
import Widget from "../widget";

interface Props {}

const ReportPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Widget title="Widget 1" width={400} height={300} />
    </div>
  );
};

export default ReportPage;
