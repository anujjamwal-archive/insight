import * as React from "react";
import { atom } from "derivable";
import {
  Report,
  KPI,
  QueryResult,
  Status,
  IColumn,
  IComponent,
  IRow
} from "./report";
import Widget from "../../components/widget";
import { Text, Column, Row } from "../../vendor/elements";
import { pure } from "react-derivable";
import { compactInteger } from "./humanise";
import * as d3 from "d3";

class Renderer {
  spec: Report;

  constructor(spec: Report) {
    this.spec = spec;
  }

  title() {
    return this.spec.title;
  }

  private buildCol(col: IColumn): React.ReactChild {
    return <Column {...col}>{col.children.map(c => this.build(c))}</Column>;
  }

  private buildRow(col: IRow): React.ReactChild {
    return <Row {...col}>{col.children.map(c => this.build(c))}</Row>;
  }

  private buildKpi(kpi: KPI): React.ReactChild {
    const trigger = atom<number>(1);
    const status = atom<Status<QueryResult>>({ status: "LOADING" });

    trigger.react(() => {
      status.set({ status: "LOADING" });

      fetch("http://www.mocky.io/v2/5d32665b330000c9c57ba633", {
        method: "POST",
        redirect: "follow",
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          status.set({ status: "READY", payload: res });
        })
        .catch(res => {
          status.set({ status: "ERROR", payload: res });
        });
    });

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

  private build(c: IComponent): React.ReactChild {
    switch (c.type) {
      case "kpi":
        return this.buildKpi(c);
      case "column":
        return this.buildCol(c);
      case "row":
        return this.buildRow(c);
      default:
        return <div />;
    }
  }

  buildPage(page: number): React.ReactChild {
    return this.build(this.spec.pages[page].children);
  }
}

export default Renderer;
