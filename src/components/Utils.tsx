import React from "react";

import BankBtn from "./BankBtn";
import SwipePad from "./SwipePad";

const Utils = () => {
  return (
    <div className="app-col-12">
      <div className="app-row app-u-justify-content-between">
        <div className="app-col-6">
          <div className="app-u-d-flex app-u-d-gap-gutter">
            <BankBtn label="A" isSelected={true} />
            <BankBtn label="B" />
            <BankBtn label="C" />
            <BankBtn label="D" />
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
