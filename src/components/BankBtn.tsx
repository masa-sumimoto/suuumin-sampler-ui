import React from "react";

import { useBankStore } from "../stores/bankStore";

interface Props {
  id: string;
  // isSelected?: boolean;
  label?: string;
  onClick?: () => void;
}

const BankBtn: React.FC<Props> = ({
  id,
  // isSelected = false,
  label,
  ...props
}) => {
  const { bankId, change } = useBankStore();
  const selectedClass = id === bankId ? "--state_selected" : "";

  const onClick = () => {
    change(id);
  };

  return (
    <button className={["bank-btn", selectedClass].join(" ")} onClick={onClick}>
      {label && <span className="bank-btn__label">{label}</span>}
    </button>
  );
};

export default BankBtn;
