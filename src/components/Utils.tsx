import React from "react";

import "../scss/bank-btn.scss";
import "../scss/swipe-pad.scss";

const Utils = () => {
  return (
    <div className="app-col-12">
      <div className="app-row app-u-justify-content-between">
        <div className="app-col-auto">
          <div className="app-u-d-flex app-u-d-gap-gutter">
            <div className="bank-btn">A</div>
            <div className="bank-btn">B</div>
            <div className="bank-btn">C</div>
            <div className="bank-btn">D</div>
          </div>
        </div>
        <div className="app-col-auto">
          <div className="swipe-pad"></div>
        </div>
      </div>
    </div>
  );
};

export default Utils;
