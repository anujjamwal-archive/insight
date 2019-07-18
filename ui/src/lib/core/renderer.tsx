import * as React from "react";
import { Report } from "./report";
import ReportPage from "../../components/reportpage";

class Renderer {
  spec: Report;

  constructor(spec: Report) {
    this.spec = spec;
  }

  title() {
    return this.spec.title;
  }

  buildPage(page: number): React.ReactChild {
    return <ReportPage />;
  }
}

export default Renderer;
