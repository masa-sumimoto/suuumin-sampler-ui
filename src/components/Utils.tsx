import React from "react";

import SwipePad from "./SwipePad";

const Utils = () => {
  return (
    <div className="app-col-12">
      <div className="app-row app-u-justify-content-between">
        <div className="app-col-6">
          <div className="app-u-d-flex app-u-d-gap-gutter">
            <div className="bank-btn">A</div>
            <div className="bank-btn">B</div>
            <div className="bank-btn">C</div>
            <div className="bank-btn">D</div>
          </div>
        </div>
        <div className="app-col-6">
          <div className="app-u-justify-content-end app-u-d-flex">
            <SwipePad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utils;
