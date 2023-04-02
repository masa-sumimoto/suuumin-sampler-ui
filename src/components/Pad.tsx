import React from "react";
import "../scss/pad.scss";

interface PadProps {
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  onClick?: () => void;
}

const Pad = ({ isActive = false, size = "md", label, ...props }: PadProps) => {
  const activeClass = isActive ? "--state_active" : "";

  return (
    <div className={["pad", `--size_${size}`, activeClass].join(" ")}>
      <div className="pad__foundation"></div>
      <div className="pad__btn-wrap">
        <button className="pad__btn" onClick={props.onClick}>
          {label && <span className="pad__label">{label}</span>}
        </button>
      </div>
    </div>
  );
};

export default Pad;
