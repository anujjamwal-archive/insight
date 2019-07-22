import * as React from "react";
import { atom, Derivable, struct } from "derivable";
import {
  Report,
  KPI,
  QueryResult,
  Status,
  IColumn,
  IComponent,
  IRow,
  ISelect,
  ComponentFilter
} from "./report";
import Widget from "../../components/widget";
import { Text, Column, Row, Container } from "../../vendor/elements";
import { pure } from "react-derivable";
import { compactInteger } from "./humanise";
import * as d3 from "d3";
import Select from "react-select";

class Context {
  providers: Record<string, any>;

  constructor() {
    this.providers = {};
  }

  getProvider<T>(id: string): Derivable<T> {
    return this.providers[id] as Derivable<T>;
  }

  registerProvider<T>(id: string, provider: Derivable<T>) {
    this.providers[id] = provider;
  }
}

type FetchFn = (arg: {
  trigger: Derivable<number>;
  filters: Record<string, string | string[]>;
}) => void;

function prepareFilters(f: ComponentFilter[], ctx: Context) {
  return f
    .map(v => ({ ...v, value: eval("data => " + v.value) }))
    .map(v => ({
      [v.field]: v.valueProvider
        ? ctx.getProvider(v.valueProvider).derive(data => v.value(data))
        : atom<string | string[]>(v.value)
    }))
    .reduceRight((a, b) => ({ ...a, ...b }), {});
}

class Renderer {
  spec: Report;

  constructor(spec: Report) {
    this.spec = spec;
  }

  title() {
    return this.spec.title;
  }

  private buildCol(col: IColumn, ctx: Context): React.ReactChild {
    return (
      <Column {...col}>{col.children.map(c => this.build(c, ctx))}</Column>
    );
  }

  private buildRow(col: IRow, ctx: Context): React.ReactChild {
    return <Row {...col}>{col.children.map(c => this.build(c, ctx))}</Row>;
  }

  private buildSelect(sel: ISelect, ctx: Context): React.ReactChild {
    const trigger = atom<number>(1);
    const status = atom<Status<QueryResult>>({ status: "LOADING" });
    const selection = atom<string>("");
    const baseQuery = sel.query;

    ctx.registerProvider(sel.id, selection);

    const fetchFn: FetchFn = ({ filters }) => {
      status.set({ status: "LOADING" });
      let query = { ...baseQuery };
      query.filters = { ...query.filters, ...(filters || {}) };

      fetch("http://www.mocky.io/v2/5d32d0a03400005400749ed3", {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)
      })
        .then(res => res.json())
        .then(res => {
          status.set({ status: "READY", payload: res });
        })
        .catch(res => {
          status.set({ status: "ERROR", payload: res });
        });
    };

    let filters = sel.filters
      ? prepareFilters(sel.filters, ctx)
      : atom<boolean>(false);

    struct({ trigger: trigger, filters: filters }).react(fetchFn);
    const value = status.derive(v =>
      v.status === "READY"
        ? v.payload!.data.map(d => ({
            value: d[sel.display.valueField],
            label: d[sel.display.labelField]
          }))
        : []
    );
    const WidgetR = pure(() => (
      <Column crossAxisSize={sel.display.width} mainAxisAlignment="flex-start">
        <Select
          options={value.get()}
          className="select-filter"
          classNamePrefix="select"
          onChange={(val: any) => selection.set(val)}
        />
      </Column>
    ));

    return <WidgetR />;
  }

  private buildKpi(kpi: KPI, ctx: Context): React.ReactChild {
    const trigger = atom<number>(1);
    const status = atom<Status<QueryResult>>({ status: "LOADING" });
    const baseQuery = kpi.query;

    const fetchFn: FetchFn = ({ filters }) => {
      status.set({ status: "LOADING" });
      let query = { ...baseQuery };
      query.filters = { ...query.filters, ...(filters || {}) };

      fetch("http://www.mocky.io/v2/5d32665b330000c9c57ba633", {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)
      })
        .then(res => res.json())
        .then(res => {
          status.set({ status: "READY", payload: res });
        })
        .catch(res => {
          status.set({ status: "ERROR", payload: res });
        });
    };

    let filters = kpi.filters && prepareFilters(kpi.filters, ctx);

    struct({ trigger: trigger, filters: filters }).react(fetchFn);

    const fn = eval("data => " + kpi.display.value);
    const value = status.derive(v =>
      v.status === "READY" ? fn(v.payload!.data) : ""
    );

    const colorFn = kpi.display.color
      ? d3
          .scaleThreshold<number, string>()
          .range(kpi.display.color.map(c => c.color))
          .domain(kpi.display.color.map(c => c.th).filter(c => !!c) as number[])
      : () => "black";

    const WidgetR = pure(() => (
      <Widget
        title={kpi.title}
        width={kpi.display.width}
        height={kpi.display.height}
        isLoading={status.get().status === "LOADING"}
        onRefresh={() => trigger.set(Math.random())}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: kpi.display.fontSize,
            color: colorFn(value.get())
          }}
        >
          {compactInteger(value.get(), kpi.display.precision)}
        </Text>
      </Widget>
    ));

    return <WidgetR />;
  }

  private build(c: IComponent, ctx: Context): React.ReactChild {
    switch (c.type) {
      case "kpi":
        return this.buildKpi(c, ctx);
      case "column":
        return this.buildCol(c, ctx);
      case "row":
        return this.buildRow(c, ctx);
      case "Select":
        return this.buildSelect(c, ctx);
      default:
        return <div />;
    }
  }

  buildPage(page: number): React.ReactChild {
    const ctx = new Context();
    return this.build(this.spec.pages[page].children, ctx);
  }
}

export default Renderer;
