import React from "react";

import { useTimeStore } from "../stores/timeStore";

interface Props {
  id: number;
  // isActive?: boolean;
}

const MeasureLed = ({ id }: Props) => {
  const { measure } = useTimeStore();

  const activeClass = id === measure ? "--state_active" : "";

  return <span className={["measure-led", activeClass].join(" ")}></span>;
};

export default MeasureLed;
