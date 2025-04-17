import React from "react";

import spiner from "../../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spiner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Spinner;
