import React from "react";

import "./pad-container.scss";

import Pad from "../components/Pad";

const PadContainer = () => {
  return (
    <div className="pad-container">
      <Pad label="1" onClick={() => console.log("clicked pad!")} />
      <Pad label="2" isActive={true} />
      <Pad label="3" />
      <Pad label="4" />
      <Pad label="5" />
      <Pad label="6" />
      <Pad label="7" />
      <Pad label="8" />
      <Pad label="9" />
      <Pad label="10" />
      <Pad label="11" />
      <Pad label="12" />
      <Pad label="13" />
      <Pad label="14" />
      <Pad label="15" />
      <Pad label="SHIFT/16" />
    </div>
  );
};

export default PadContainer;
