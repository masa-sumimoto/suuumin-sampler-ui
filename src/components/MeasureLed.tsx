import React from "react";

interface MeasureLedProps {
  isActive?: boolean;
}

const MeasureLed = ({ isActive = false }: MeasureLedProps) => {
  const activeClass = isActive ? "--state_active" : "";

  return <span className={["measure-led", activeClass].join(" ")}></span>;
};

export default MeasureLed;
