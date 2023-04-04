import React from "react";

import MenuBtn from "./MenuBtn";

const Menus = () => {
  return (
    <div className="app-col-12">
      <div className="app-row app-u-py-gutter">
        <div className="app-col-4">
          <MenuBtn label="menu1" />
        </div>
        <div className="app-col-4">
          <MenuBtn label="menu2" />
        </div>
        <div className="app-col-4">
          <MenuBtn label="menu3" />
        </div>
        <div className="app-col-4">
          <MenuBtn label="menu4" />
        </div>
      </div>
      <div className="app-row app-u-py-gutter">
        <div className="app-col-4">
          <MenuBtn label="menu5" />
        </div>
        <div className="app-col-4">
          <MenuBtn label="menu6" />
        </div>
        <div className="app-col-1dot5">
          <div className="menu-btn"></div>
        </div>
        <div className="app-col-1dot5">
          <div className="menu-btn"></div>
        </div>
        <div className="app-col-1dot5">
          <div className="menu-btn"></div>
        </div>
        <div className="app-col-1dot5">
          <div className="menu-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
