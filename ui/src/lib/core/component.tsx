import * as React from "react";
import { ThresholdValue, IIcon, IText, ISelect, OptionType } from "./types";
import * as d3 from "d3";
import { Text, Column } from "../../vendor/elements";
import { Icon } from "../../vendor/material";
import Select from "react-select";

type Provider<T> = (data: any) => T;

function valueProvider<T>(v: T | string | ThresholdValue<T>): Provider<T> {
  if (v instanceof Array) {
    const fn = d3
      .scaleThreshold<number, T>()
      .range(v.map(c => c.value))
      .domain(v.map(c => c.th).filter(c => !!c) as number[]);

    return data => fn(data);
  }

  return eval("data => " + v);
}

function buildIcon(icon: IIcon) {
  const iconFn = valueProvider<string>(icon.value);
  const sizeFn = valueProvider<number>(icon.size);
  const colorFn = valueProvider<string>(icon.color);
  return (data: any) => (
    <Icon
      icon={iconFn(data)}
      size={sizeFn(data)}
      color={colorFn(data)}
      status="active-unfocused"
    />
  );
}

function buildText(txt: IText) {
  const textFn = valueProvider<string>(txt.value);
  const sizeFn = valueProvider<number>(txt.size);
  const colorFn = valueProvider<string>(txt.color);
  return (data: any) => (
    <Text
      style={{ ...txt.style, fontSize: sizeFn(data), color: colorFn(data) }}
    >
      {textFn(data)}
    </Text>
  );
}

function buildSelect(sel: ISelect) {
  return (data: Array<OptionType>) => (
    <Column crossAxisSize={sel.width} mainAxisAlignment="flex-start">
      <Select
        options={data}
        className="select-filter"
        classNamePrefix="select"
        onChange={sel.onChange}
      />
    </Column>
  );
}

export { buildIcon, buildText, buildSelect, valueProvider };
