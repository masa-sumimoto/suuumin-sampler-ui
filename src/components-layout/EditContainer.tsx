import React from "react";

import "./edit-container.scss";

const EditContainer = () => {
  return (
    <div className="edit-container">
      <div className="edit-row">
        <div className="edit-col --a">
          <div className="foo">
            A row. this is contents. this is contents. this is contents. this is
            contents. this is contents. this is contents. this is contents. this
            is contents. this is contents.
          </div>
        </div>
      </div>
      <div className="edit-row">
        <div className="edit-col --b">
          B row. this is contents. this is contents. this is contents. this is
          contents. this is contents. this is contents. this is contents. this
          is contents. this is contents.
        </div>
      </div>
      <div className="edit-row">
        <div className="edit-col --c">
          C row. this is contents. this is contents. this is contents. this is
          contents. this is contents. this is contents. this is contents. this
          is contents. this is contents.
        </div>
      </div>
      <div className="edit-row">
        <div className="edit-col --d">D row. this is contents.</div>
      </div>
    </div>
  );
};

export default EditContainer;
