import React, { useRef } from "react";

import "../scss/pad.scss";

interface Props {
  isActive?: boolean;
  colorId?: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

const Pad = ({
  isActive = false,
  colorId = 1,
  size = "md",
  label,
  ...props
}: Props) => {
  const activeClass = "--state_active";

  const padRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    // padRef.current?.classList.add("--state_active");
    // if (props.onMouseDown) {
    //   props.onMouseDown();
    // }
  };

  const handleMouseDown = () => {
    padRef.current?.classList.add(activeClass);

    if (props.onMouseDown) props.onMouseDown();
  };

  const handleMouseUp = () => {
    setTimeout(() => {
      padRef.current?.classList.remove(activeClass);
    }, 50);

    if (props.onMouseUp) props.onMouseUp();
  };

  return (
    <div
      ref={padRef}
      className={["pad", `--size_${size} --color_${colorId}`].join(" ")}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <div className="pad__foundation"></div>
      <div className="pad__btn-wrap">
        <button className="pad__btn">
          {label && <span className="pad__label">{label}</span>}
        </button>
      </div>
    </div>
  );
};

export default Pad;
