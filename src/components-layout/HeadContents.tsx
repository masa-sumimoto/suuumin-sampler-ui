import React from "react";

import MeasureLed from "../components/MeasureLed";

const HeadContents = () => {
  const measureLeds = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="head-container app-u-mb-gutter">
      <div className="app-row app-u-mx-0 app-u-h-100 app-u-justify-content-between app-u-align-items-end">
        <div className="app-col-auto">
          <div className="measure-leds">
            {measureLeds.map((led) => (
              <MeasureLed key={led.id} id={led.id} />
            ))}
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
