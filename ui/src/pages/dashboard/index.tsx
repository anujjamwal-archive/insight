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
            mainAxisAlignment: "flex-start",
            mainAxisSize: "max",
            crossAxisSize: "max",
            crossAxisAlignment: "flex-start",
            style: { padding: "10px" },
            children: [
              {
                type: "row",
                mainAxisAlignment: "flex-start",
                crossAxisAlignment: "flex-start",
                style: { margin: "10px" },
                children: [
                  {
                    type: "Select",
                    id: "1234",
                    display: {
                      width: "200px",
                      labelField: "name",
                      valueField: "division"
                    },
                    query: {
                      datasource: "",
                      metrics: [],
                      buckets: [],
                      order: []
                    }
                  }
                ]
              },
              {
                type: "row",
                mainAxisAlignment: "flex-start",
                crossAxisAlignment: "flex-start",
                style: { margin: "10px" },
                children: [
                  {
                    type: "kpi",
                    title: "Total Sales",
                    display: {
                      height: 100,
                      width: 200,
                      value: "data[0].sales",
                      precision: 4,
                      fontSize: "43.2px",
                      color: [
                        { value: "red" },
                        { th: 10e3, value: "yellow" },
                        { th: 10e6, value: "green" }
                      ]
                    },
                    query: {
                      datasource: "",
                      metrics: [],
                      buckets: [],
                      order: []
                    },
                    filters: [
                      {
                        field: "division",
                        valueProvider: "1234",
                        value: "data.value"
                      }
                    ]
                  }
                ]
              }
            ]
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
