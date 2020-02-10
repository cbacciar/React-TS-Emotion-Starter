import * as React from "react";
import { SFC } from "react";
import { IBasicButtonProps as BasicButtonProps } from "./BasicButton.d";
import classNames from "classnames";
import { addPrefix } from "../../../utils";

/**
 * BasicButton Component strictly for demo purposes
 * default and dynamic props to generate a styled BasicButton Component
 *
 * @param props properties for BasicButton Component
 * @returns a Decorated BasicButton Component
 */
const BasicButton: SFC<BasicButtonProps> = props => {
  const {
    className,
    classPrefix,
    color,
    children,
    componentClass: Component,
    active,
    disabled,
    loading,
    block,
    signPost
  } = props;

  const classes = classNames(
    classPrefix,
    addPrefix(classPrefix, color),
    className,
    {
      [addPrefix("", "active")]: active,
      [addPrefix("", "disabled")]: disabled,
      [addPrefix("", "loading")]: loading,
      [addPrefix("", "block")]: block
    }
  );

  return (
    <Component data-testid={signPost} className={classes}>
      {children}
    </Component>
  );
};
/**
 *  Default ButtonProps
 */
BasicButton.defaultProps = {
  classPrefix: "btn",
  color: "secondary",
  componentClass: "button",
  signPost: "button-sign-post"
};

export default BasicButton;
