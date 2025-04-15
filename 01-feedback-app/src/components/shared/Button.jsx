import PropTypes, { bool } from "prop-types";
import React, { version } from "react";

function Button({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
