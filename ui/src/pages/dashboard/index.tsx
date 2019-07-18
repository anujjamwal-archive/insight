import * as React from "react";
import { Report } from "../../lib/core/report";
import { DashboardLayout } from "../../components/layout";
import { match } from "react-router-dom";
import Renderer from "../../lib/core/renderer";

interface Props {
  match: match<{ id: string }>;
  spec: Report;
}

interface State {
  currentPage: number;
  renderer: Renderer;
}

class Dashboard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { currentPage: 0, renderer: new Renderer(props.spec) };
  }

  render() {
    return (
      <DashboardLayout title={this.state.renderer.title()}>
        {this.state.renderer.buildPage(this.state.currentPage)}
      </DashboardLayout>
    );
  }
}

export default Dashboard;
