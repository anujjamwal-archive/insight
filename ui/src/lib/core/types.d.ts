import { ValueType, ActionMeta } from "react-select/src/types";

export type ThresholdValue<T> = Array<{ th?: number; value: T }>;

interface IIcon {
  value: string | ThresholdValue<string>;
  color: string | ThresholdValue<string>;
  size: number;
}

interface IText {
  style?: React.CSSProperties;
  value: string | ThresholdValue<string>;
  color: string | ThresholdValue<string>;
  size: number | ThresholdValue<number>;
}

type OptionType = { label: string; value: string };

interface ISelect {
  width: string;
  onChange: (val: ValueType<OptionType>, action: ActionMeta) => void;
}
