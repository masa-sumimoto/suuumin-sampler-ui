import React from "react";

import Pad from "../components/Pad";

const PadContents = () => {
  return (
    <div className="pad-group app-row app-u-px-gutter">
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="1" colorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="2" colorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="3" colorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="4" colorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="5" colorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="6" colorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="7" colorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="8" colorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="9" colorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="10" colorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="11" colorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="12" colorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="13" colorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="14" colorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="15" colorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="16/SHIFT" colorId={5} />
      </div>
    </div>
  );
};

export default PadContents;
