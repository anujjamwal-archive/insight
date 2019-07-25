import * as React from "react";
import { ThresholdValue, IIcon, IText } from "./types";
import * as d3 from "d3";
import { Text } from "../../vendor/elements";
import { Icon } from "../../vendor/material";

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

export { buildIcon, valueProvider };
