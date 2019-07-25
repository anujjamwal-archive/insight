import * as React from "react";
import { Color } from "csstype";

const generateStyle = (props: IProps): React.CSSProperties => ({
  fontFamily: "Material Icons",
  fontWeight: "normal",
  fontStyle: "normal",
  display: "inline-block",
  fontSize: props.size,
  opacity: opacityLookup[props.status],
  animation: (props.spin && "spin 2s linear infinite") || undefined,
  cursor: props.onClick && "pointer",
  color: props.color
});

type iconSize = number;

type status = "active" | "active-unfocused" | "inactive";

const opacityLookup: any = {
  active: 0.87,
  "active-unfocused": 0.54,
  inactive: 0.38
};

interface IProps {
  icon: string;
  size: iconSize;
  status: status;
  onClick?: () => void;
  spin?: boolean;
  color?: Color;
}

const Icon: React.SFC<IProps> = (props: IProps) => (
  <i style={generateStyle(props)} onClick={props.onClick}>
    {props.icon}
  </i>
);

export default Icon;
