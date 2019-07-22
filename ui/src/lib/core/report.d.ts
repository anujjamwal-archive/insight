interface Report {
  title: string;
  pages: Array<ReportPage>;
}

interface ReportPage {
  title: string;
  children: IComponent;
}

type IComponent = IRow | IColumn | KPI | ISelect | Chart;

interface ISelect {
  id: string;
  type: "Select";
  query: Query;
  display: {
    width: string;
    labelField: string;
    valueField: string;
  };
  filters?: Array<ComponentFilter>;
}

interface IColumn {
  type: "column";
  crossAxisSize?: string;
  crossAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  mainAxisSize?: string;
  mainAxisAlignment:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  style?: React.CSSProperties;
  children: Array<IComponent>;
}

interface IRow {
  type: "row";
  crossAxisSize?: string;
  crossAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  mainAxisSize?: string;
  mainAxisAlignment:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  style?: React.CSSProperties;
  children: Array<IComponent>;
}

interface Query {
  datasource: string;
  metrics: Array<{
    field: string;
    aggregation: string;
    alias: string;
  }>;
  filters?: Record<string, string | string[]>;
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

interface ComponentFilter {
  field: string;
  valueProvider: string;
  value: string | Array<string>;
}

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
  filters?: Array<ComponentFilter>;
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
  ComponentFilter,
  IComponent,
  IColumn,
  IRow,
  ISelect,
  KPI,
  Query,
  QueryResult,
  Report,
  ReportPage,
  Status
};
