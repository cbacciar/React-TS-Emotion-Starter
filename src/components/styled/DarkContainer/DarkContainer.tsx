import * as React from "react";
import { DarkStyling } from "./styles/ContainerStyles";

/**
 * Rounded Button Component that extends BasicButton
 * allowing only the styling to be modified and not the root functionality
 *
 * @param props properties needed to satisfy BasicButton
 * @returns a decorated BasicButton, now with additional rounded stylings
 */
const DarkContainer = props => {
  return <DarkStyling {...props} />;
};

export default DarkContainer;
