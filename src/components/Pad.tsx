import React from "react";
import "./pad.scss";

interface PadProps {
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  onClick?: () => void;
}

const Pad = ({ isActive = false, size = "md", label, ...props }: PadProps) => {
  const activeClass = isActive ? "pad--state_active" : "";

  return (
    <div className={["pad", `pad--size_${size}`, activeClass].join(" ")}>
      <div className="pad__inner">
        <button className="pad__btn" onClick={props.onClick}>
          {label && <span className="pad__label">{label}</span>}
        </button>
      </div>
    </div>
  );
};

export default Pad;
