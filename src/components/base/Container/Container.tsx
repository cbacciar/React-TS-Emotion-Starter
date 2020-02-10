import * as React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import { IContainerProps as ContainerProps } from "./Container.d";
import { IContainerState as ContainerState } from "./Container.d";
import { addPrefix, defaultProps } from "../../../utils";

export const ContainerContext = React.createContext({});

class Container extends React.Component<ContainerProps, ContainerState> {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    classPrefix: PropTypes.string,
    signPost: PropTypes.string,
    componentClass: PropTypes.elementType,
    fluid: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      hasSidebar: false
    };
  }

  setContextState = nextState => {
    this.setState(nextState);
  };

  render() {
    const {
      componentClass: Component,
      className,
      children = [],
      classPrefix,
      signPost,
      fluid,
      ...props
    } = this.props;
    const classes = classNames(!fluid && classPrefix, className, {
      [addPrefix(classPrefix, "has-sidebar")]: this.state.hasSidebar,
      [addPrefix(classPrefix, "fluid")]: fluid
    });

    if (Component) {
      return (
        <ContainerContext.Provider
          value={{ setContextState: this.setContextState }}
        >
          <Component data-testid={signPost} {...props} className={classes}>
            {children}
          </Component>
        </ContainerContext.Provider>
      );
    } else {
      return (
        <ContainerContext.Provider
          value={{ setContextState: this.setContextState }}
        >
          <div data-testid={signPost} {...props} className={classes}>
            {children}
          </div>
        </ContainerContext.Provider>
      );
    }
  }
}
export default defaultProps<ContainerProps>({
  classPrefix: "container",
  componentClass: "div",
  signPost: "container-signpost"
})(Container);
