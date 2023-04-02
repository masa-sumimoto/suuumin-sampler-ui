import React, { useState } from "react";

interface Props {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const Fader: React.FC<Props> = ({ min, max, step, value, onChange }) => {
  const [sliderVal, setSliderVal] = useState(value);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSliderVal(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={sliderVal}
      onChange={handleSliderChange}
      className="fader"
    ></input>
  );
};

export default Fader;
