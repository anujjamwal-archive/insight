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

interface Query {
  datasource: string;
  metrics: Array<{
    field: string;
    aggregation: string;
    alias: string;
  }>;
  buckets: Array<string>;
  order: Array<string>;
}

interface QueryResult {
  id: string;
  executionTime: number;
  data: Array<Record<string, any>>;
}

interface Status<T> {
  status: "LOADING" | "READY" | "ERROR";
  payload?: T;
}

type MetricColor = Array<{ th?: number; color: string }>;

interface KPI {
  type: "kpi";
  title: string;
  query: Query;
  display: {
    width: number | string;
    height: number | string;
    value: string;
    precision: number;
    fontSize: string;
    color?: MetricColor;
  };
}

interface Chart {
  type: "Chart";
  title: string;
  query: Query;
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

export {
  Chart,
  Component,
  KPI,
  Query,
  QueryResult,
  Report,
  ReportPage,
  Status
};
