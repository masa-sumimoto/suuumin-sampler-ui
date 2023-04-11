import React from "react";

import PadContents from "./PadContents";
import EditContents from "./EditContents";
import HeadContents from "./HeadContents";

const AppBody = () => {
  return (
    <div className="app-container --style_app-body app-u-py-gutter">
      <div className="app-row">
        <div className="app-col-12">
          <HeadContents />
        </div>
        <div className="app-col-12 app-col-lg-6 app-u-order-2 app-u-order-lg-1">
          <PadContents />
        </div>
        <div className="app-col-12 app-col-lg-6 app-u-order-1 app-u-order-lg-2">
          <EditContents />
        </div>
      </div>
    </div>
  );
};

export default AppBody;
