import React from "react";

import MeasureLed from "../components/MeasureLed";

const HeadContents = () => {
  return (
    <div className="head-container app-u-mb-gutter">
      <div className="app-row app-u-mx-0 app-u-h-100 app-u-justify-content-between app-u-align-items-end">
        <div className="app-col-auto">
          <div className="measure-leds">
            <MeasureLed isActive={true} />
            <MeasureLed />
            <MeasureLed />
            <MeasureLed />
          </div>
        </div>
        <div className="app-col-auto">
          <div className="app-logo">Suuumin Sampler</div>
        </div>
      </div>
    </div>
  );
};

export default HeadContents;
