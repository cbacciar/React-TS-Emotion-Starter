import * as React from "react";
import { StandardProps } from "../@types/common";

export interface IContainerProps extends StandardProps {
  /** Primary content */
  children?: React.ReactNode;
}

export interface IContainerState {
  /** If true, allows room for a Sidebar Component */
  hasSidebar: boolean;
  /** If true, spans the entire width of the viewport */
  fluid?: boolean;
}

declare const Container: React.ComponentType<IContainerProps>;

export default Container;
