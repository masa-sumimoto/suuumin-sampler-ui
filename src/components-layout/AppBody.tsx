import React from "react";

import PadContents from "./PadContents";
import EditContents from "./EditContents";
import HeadContents from "./HeadContents";

const AppBody = () => {
  return (
    <div className="app-body">
      <div className="app-container">
        <div className="app-row">
          <div className="app-col-12">
            <HeadContents />
          </div>
          <div className="app-col-12 app-col-lg-6">
            <PadContents />
          </div>
          <div className="app-col-12 app-col-lg-6">
            <EditContents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBody;
