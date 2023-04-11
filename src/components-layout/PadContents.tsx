import React from "react";

import Pad from "../components/Pad";

const PadContents = () => {
  return (
    <div className="pad-group app-row app-u-px-gutter">
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="1" activeColorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="2" activeColorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="3" activeColorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="4" activeColorId={1} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="5" activeColorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="6" activeColorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="7" activeColorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="8" activeColorId={2} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="9" activeColorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="10" activeColorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="11" activeColorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="12" activeColorId={3} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="13" activeColorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="14" activeColorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="15" activeColorId={4} />
      </div>
      <div className="app-col-4 app-u-my-gutter">
        <Pad label="16/SHIFT" activeColorId={5} />
      </div>
    </div>
  );
};

export default PadContents;
