import React from "react";

import Pad from "../components/Pad";

const PadContents = () => {
  return (
    <div className="pad-container">
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="1" activeColorId={1} />
        </div>
        <div className="app-col-4">
          <Pad label="2" activeColorId={1} />
        </div>
        <div className="app-col-4">
          <Pad label="3" activeColorId={1} />
        </div>
        <div className="app-col-4">
          <Pad label="4" activeColorId={1} />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="5" activeColorId={2} />
        </div>
        <div className="app-col-4">
          <Pad label="6" activeColorId={2} />
        </div>
        <div className="app-col-4">
          <Pad label="7" activeColorId={2} />
        </div>
        <div className="app-col-4">
          <Pad label="8" activeColorId={2} />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="9" activeColorId={3} />
        </div>
        <div className="app-col-4">
          <Pad label="10" activeColorId={3} />
        </div>
        <div className="app-col-4">
          <Pad label="11" activeColorId={3} />
        </div>
        <div className="app-col-4">
          <Pad label="12" activeColorId={3} />
        </div>
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-4">
          <Pad label="13" activeColorId={4} />
        </div>
        <div className="app-col-4">
          <Pad label="14" activeColorId={4} />
        </div>
        <div className="app-col-4">
          <Pad label="15" activeColorId={4} />
        </div>
        <div className="app-col-4">
          <Pad label="16/SHIFT" activeColorId={5} />
        </div>
      </div>
    </div>
  );
};

export default PadContents;
