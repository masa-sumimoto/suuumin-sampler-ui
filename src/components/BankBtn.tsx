import React from "react";

interface Props {
  isSelected?: boolean;
  label?: string;
  onClick?: () => void;
}

const BankBtn: React.FC<Props> = ({ isSelected = false, label, ...props }) => {
  const selectedClass = isSelected ? "--state_selected" : "";

  return (
    <button className={["bank-btn", selectedClass].join(" ")}>
      {label && <span className="bank-btn__label">{label}</span>}
    </button>
  );
};

export default BankBtn;
