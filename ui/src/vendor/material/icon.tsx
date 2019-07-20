import * as React from "react";
import { Color } from "csstype";

const generateStyle = (props: IProps): React.CSSProperties => ({
  fontFamily: "Material Icons",
  fontWeight: "normal",
  fontStyle: "normal",
  display: "inline-block",
  fontSize: +props.size.replace("md-", ""),
  opacity: opacityLookup[props.status],
  animation: (props.spin && "spin 2s linear infinite") || undefined,
  cursor: props.onClick && "pointer"
});

type iconSize = "md-18" | "md-24" | "md-36" | "md-48";

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
