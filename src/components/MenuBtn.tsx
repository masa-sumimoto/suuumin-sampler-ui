import React from "react";

type Props = {
  label?: string;
};

const MenuBtn: React.FC<Props> = ({ label }) => {
  return (
    <button className="menu-btn">
      {label && <span className="menu-btn__label">{label}</span>}
    </button>
  );
};

export default MenuBtn;
