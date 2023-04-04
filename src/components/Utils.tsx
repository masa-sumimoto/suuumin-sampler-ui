import React from "react";

import BankBtn from "./BankBtn";
import SwipePad from "./SwipePad";

const Utils = () => {
  const bankBtns = [
    {
      id: "a",
      label: "A",
    },
    {
      id: "b",
      label: "B",
    },
    {
      id: "c",
      label: "C",
    },
    {
      id: "d",
      label: "D",
    },
  ];

  return (
    <div className="app-col-12 app-u-mt-gutter">
      <div className="app-row app-u-justify-content-between">
        <div className="app-col-12 app-col-md-6 app-u-mb-gutter">
          <div className="app-u-d-flex app-u-d-gap-gutter">
            {bankBtns.map((btn) => (
              <BankBtn key={btn.id} id={btn.id} label={btn.label} />
            ))}
          </div>
        </div>
        <div className="app-col-12 app-col-md-6">
          <div className="app-u-justify-content-end app-u-d-flex app-u-mb-gutter">
            <SwipePad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utils;
