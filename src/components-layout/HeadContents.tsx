import React from "react";

import MeasureLed from "../components/MeasureLed";

const HeadContents = () => {
  return (
    <div className="head-container app-u-mb-gutter">
      <div className="app-row app-u-mx-0">
        <div className="app-col-12">
          <div className="measure-leds">
            <MeasureLed isActive={true} />
            <MeasureLed />
            <MeasureLed />
            <MeasureLed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadContents;
