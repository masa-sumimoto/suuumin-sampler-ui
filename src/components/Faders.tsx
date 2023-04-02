import React, { useState } from "react";

import Fader from "./Fader";

const Faders = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="app-col-6">
        <Fader
          min={-10}
          max={10}
          step={1}
          value={0}
          onChange={handleSliderChange}
        />
      </div>
      <div className="app-col-6">
        <Fader
          min={-10}
          max={10}
          step={1}
          value={0}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
};

export default Faders;
