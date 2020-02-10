import * as React from "react";
import { RoundStyling } from "./styles/ButtonStyles";

/**
 * Rounded Button Component that extends BasicButton
 * allowing only the styling to be modified and not the root functionality
 *
 * @param props properties needed to satisfy BasicButton
 * @returns a decorated BasicButton, now with additional rounded stylings
 */
const RoundButton = props => {
  return <RoundStyling {...props} />;
};

export default RoundButton;
