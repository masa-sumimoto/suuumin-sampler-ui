import React from "react";

import Utils from "../components/Utils";
import DegitalCanvas from "../components/DegitalCanvas";
import MenusBtns from "../components/MenuBtns";
import Faders from "../components/Faders";

const EditContents = () => {
  return (
    <div className="edit-container">
      <div className="app-row app-u-mx-0">
        <Utils />
      </div>
      <div className="app-row app-u-py-gutter app-u-mx-0">
        <DegitalCanvas />
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
