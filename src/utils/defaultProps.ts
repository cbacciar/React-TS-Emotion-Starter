import * as React from "react";

/**
 * Interface for what defaultProps should be
 * available for wrapping
 */
export interface Props {
  classPrefix: string;
  componentClass?: React.ElementType;
  signPost?: string;
}

/**
 * Using this HOC function, a class-based Component can
 * be wrapped within a given set of props one wishes to include
 * prior to rendering
 *
 * @param props defaultProps for HOC Component
 * @returns a wrapped HOC Component with default props
 */
const defaultProps = <T>(props: Props) => {
  const { classPrefix, signPost, ...rest } = props;

  return (
    WrappedComponent: React.ComponentClass<any>
  ): React.ComponentClass<T> => {
    class DefaultPropsComponent extends WrappedComponent {
      // for IE9 & IE10 support
      static contextTypes = WrappedComponent.contextTypes;
      static childContextTypes = WrappedComponent.childContextTypes;
      static getDerivedStateFromProps =
        WrappedComponent.getDerivedStateFromProps;

      static defaultProps: any = {
        ...WrappedComponent.defaultProps,
        classPrefix,
        signPost,
        ...rest
      };

      render() {
        return super.render();
      }
    }

    // for IE9 & IE10 support
    if (WrappedComponent.contextType) {
      DefaultPropsComponent.contextType = WrappedComponent.contextType;
    }

    return DefaultPropsComponent;
  };
};

export default defaultProps;
