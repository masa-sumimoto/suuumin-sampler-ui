import React, { useRef, useEffect } from "react";
import { useTimeStore } from "../stores/timeStore";

import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";
import iconDoubleUp from "../images/icon-double-up.svg";
import iconDoubleDown from "../images/icon-double-down.svg";

const BPMPanel = () => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const {
    bpm,
    changeBpm,
    incrementBpm,
    decrementBpm,
    incrementMoreBpm,
    decrementMoreBpm,
  } = useTimeStore();

  useEffect(() => {
    const panel = panelRef.current;
    if (panel) {
      const handleScroll = (event: WheelEvent) => {
        console.log("handle");
        const newNum = bpm + (event.deltaY > 0 ? 1 : -1);
        changeBpm(newNum);
        if (newNum < 40) {
          changeBpm(40);
        } else if (newNum > 255) {
          changeBpm(255);
        } else {
          changeBpm(newNum);
        }
      };
      panel.addEventListener("wheel", handleScroll);

      return () => {
        panel.removeEventListener("wheel", handleScroll);
      };
    }
  }, [bpm]);

  const handleBpmUpBtnClick = () => {
    incrementBpm();
  };

  const handleBpmDownBtnClick = () => {
    decrementBpm();
  };

  const handleBpmUp10BtnClick = () => {
    incrementMoreBpm();
  };

  const handleBpmDown10BtnClick = () => {
    decrementMoreBpm();
  };

  return (
    <div className="bpm-panel">
      <div ref={panelRef} className="bpm-panel__display">
        <span className="bpm-panel__label">BPM :</span>
        <span className="bpm-panel__num">{bpm}</span>
      </div>
      <div className="bpm-panel__btns">
        <button
          className="bpm-panel__btn --type_up"
          onClick={handleBpmUpBtnClick}
        >
          <img src={iconUp} alt="Up" />
        </button>
        <button
          className="bpm-panel__btn --type_down"
          onClick={handleBpmDownBtnClick}
        >
          <img src={iconDown} alt="Down" />
        </button>
        <button
          className="bpm-panel__btn --type_up"
          onClick={handleBpmUp10BtnClick}
        >
          <img src={iconDoubleUp} alt="10 Up" />
        </button>
        <button
          className="bpm-panel__btn --type_down"
          onClick={handleBpmDown10BtnClick}
        >
          <img src={iconDoubleDown} alt="10 Down" />
        </button>
      </div>
    </div>
  );
};

export default BPMPanel;
