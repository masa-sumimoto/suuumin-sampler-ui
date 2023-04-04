import React, { useRef } from "react";

interface Props {
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

const Pad = ({ isActive = false, size = "md", label, ...props }: Props) => {
  const activeClass = isActive ? "--state_active" : "";

  const padRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    console.log(padRef.current?.classList);
    padRef.current?.classList.add("--state_active");

    if (props.onMouseDown) {
      props.onMouseDown();
    }
  };

  const handleMouseUp = () => {
    padRef.current?.classList.remove("--state_active");
    if (props.onMouseUp) {
      props.onMouseUp();
    }
  };

  return (
    <div
      ref={padRef}
      className={["pad", `--size_${size}`, activeClass].join(" ")}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
