import React from "react";
import "./pad.css";

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

// export const Button = ({
//   primary = false,
//   size = "medium",
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary
//     ? "storybook-button--primary"
//     : "storybook-button--secondary";
//   return (
//     <button
//       type="button"
//       className={["storybook-button", `storybook-button--${size}`, mode].join(
//         " "
//       )}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };
