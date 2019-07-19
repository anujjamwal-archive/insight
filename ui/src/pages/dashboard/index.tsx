import * as React from "react";
import { Report } from "../../lib/core/report";
import { DashboardLayout } from "../../components/layout";
import { match } from "react-router-dom";
import Renderer from "../../lib/core/renderer";

interface Props {
  match: match<{ id: string }>;
}

interface State {
  currentPage: number;
  renderer: Renderer;
}

class Dashboard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const spec: Report = {
      title: "Dashboard " + props.match.params.id,
      pages: [
        {
          title: "Page 1",
          children: {
            type: "column",
            children: []
          }
        }
      ]
    };

    this.state = { currentPage: 0, renderer: new Renderer(spec) };
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
