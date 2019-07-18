declare module "react-derivable" {
  export function reactive<T>(arg: React.FC<T>): React.FC<T>;
  export function reactive<T>(arg: React.Component<T>): React.Component<T>;
  export function pure<T>(arg: React.FC<T>): React.FC<T>;
  export function pure<T>(arg: React.Component<T>): React.Component<T>;
}
