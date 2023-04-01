import React from "react";

import Pad from "../components/Pad";

const PadContents = () => {
  return (
    <div className="pad-container">
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="1" onClick={() => console.log("clicked pad!")} />
        </div>
        <div className="app-col-4">
          <Pad label="2" isActive={true} />
        </div>
        <div className="app-col-4">
          <Pad label="3" />
        </div>
        <div className="app-col-4">
          <Pad label="4" />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="5" />
        </div>
        <div className="app-col-4">
          <Pad label="6" />
        </div>
        <div className="app-col-4">
          <Pad label="7" />
        </div>
        <div className="app-col-4">
          <Pad label="8" />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="9" />
        </div>
        <div className="app-col-4">
          <Pad label="10" />
        </div>
        <div className="app-col-4">
          <Pad label="11" />
        </div>
        <div className="app-col-4">
          <Pad label="12" />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="13" />
        </div>
        <div className="app-col-4">
          <Pad label="14" />
        </div>
        <div className="app-col-4">
          <Pad label="15" />
        </div>
        <div className="app-col-4">
          <Pad label="16/SHIFT" />
        </div>
      </div>
    </div>
  );
};

export default PadContents;
