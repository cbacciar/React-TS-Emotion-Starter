import * as React from "react";
import { StandardProps, TypeAttributes } from "../@types/common";

/**
 *  Button Component Interface for accepted props.
 *  Extends global [[StandardProps]] interface
 */
export interface IBasicButtonProps extends StandardProps {
  /** True if this component is currently active */
  active?: boolean;
  /** The HTML element that this component will render on the DOM */
  componentClass?: React.ElementType;
  /** Size of the component based on a TypeAttributes type found in @types/common.d.ts */
  size?: TypeAttributes.Size;
  /** Color of the component's background based on a TypeAttributes type found in @types/common.d.ts */
  color?: TypeAttributes.Color;
  /** List of child nodes of the component */
  children?: React.ReactNode;
  /** True if the component holds a display block property */
  block?: boolean;
  /** Anchor link triggered upon onClick */
  href?: string;
  /** True if the component is still loading content */
  loading?: boolean;
  /** True if this component is currently disabled */
  disabled?: boolean;
  /** event function that triggers when this component is clicked on  */
  onClick?: (event: React.SyntheticEvent) => void;
}

declare const BasicButton: React.ComponentType<IBasicButtonProps>;

export default IBasicButtonProps;
