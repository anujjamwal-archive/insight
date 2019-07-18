interface Report {
  title: string;
  pages: Array<ReportPage>;
}

interface ReportPage {
  title: string;
  children: Component;
}

type Component = Row | Column | KPI | Chart;

interface Column {
  type: "column";
  children: Array<Component>;
}

interface Row {
  type: "row";
  children: Array<Component>;
}

interface KPI {
  type: "kpi";
  title: string;
  datasource: {
    id: string;
    dateFilterField?: string;
  };
  metric: {
    field: string;
    aggregation: string;
    alias: string;
  };
}

interface Chart {
  type: "Chart";
  title: string;
  datasource: {
    id: string;
    dateFilterField?: string;
  };
  metrics: Array<{
    field: string;
    aggregation: string;
    alias: string;
  }>;
  buckets: Array<string>;
  order: Array<string>;
  viz: {
    type: "Series";
    axes: Array<{}>;
    elements: Array<
      | {
          type: "bar";
          metric: string;
          color: string;
          width: string;
          lineWeight: string;
        }
      | {
          type: "line";
          metric: string;
          color: string;
          lineWeight: string;
        }
      | {
          type: "circle";
          metric: string;
          color: string;
          radius: string;
          lineWeight: string;
        }
    >;
  };
}

export { Report, ReportPage };
