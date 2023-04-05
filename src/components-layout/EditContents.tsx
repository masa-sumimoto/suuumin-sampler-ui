import React from "react";

import Utils from "../components/Utils";
import DegitalCanvas from "../components/DegitalCanvas";
import MenusBtns from "../components/MenuBtns";
import Faders from "../components/Faders";
import BPMPanel from "../components/BPMPanel";
import MeasurePanel from "../components/MeasurePanel";

const EditContents = () => {
  return (
    <div className="edit-container">
      <div className="app-row app-u-mx-0">
        <Utils />
      </div>
      <div className="app-row app-u-pb-gutter app-u-mx-0">
        <DegitalCanvas />
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <div className="app-col-6">
          <BPMPanel />
        </div>
        <div className="app-col-6">
          <MeasurePanel />
        </div>
      </div>
      <div className="app-row app-u-mx-0">
        <MenusBtns />
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <Faders />
      </div>
    </div>
  );
};

export default EditContents;
