import React from "react";

import PadContainer from "./PadContainer";
import EditContainer from "./EditContainer";
import HeadContainer from "./HeadContainer";

import "./app-body.scss";

const AppBody = () => {
  return (
    <div className="app-body-container">
      <HeadContainer />
      <div className="app-main-container">
        <PadContainer />
        <EditContainer />
      </div>
    </div>
  );
};

export default AppBody;
