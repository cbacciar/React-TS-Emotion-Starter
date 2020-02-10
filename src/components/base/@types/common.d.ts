export interface StandardProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** Additional style */
  style?: React.CSSProperties;

  /** Additional signpost mapping for testing purposes */
  signPost?: string;

  [key: string]: any;
}

export declare namespace TypeAttributes {
  type Size = "lg" | "md" | "sm" | "xs";
  type Status = "success" | "warning" | "error" | "info";
  type Color =
    | "primary"
    | "success"
    | "secondary"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark";
}

declare global {
  interface String {
    replaceAll(this, find: string, replace: string): string;
  }
}
