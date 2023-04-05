import React, { useState, useRef, useEffect } from "react";

const BPMPanel = () => {
  const [num, setNum] = useState<number>(120);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (panel) {
      const handleScroll = (event: WheelEvent) => {
        const newNum = num + (event.deltaY > 0 ? 1 : -1);
        if (newNum < 40) {
          setNum(40);
        } else if (newNum > 255) {
          setNum(255);
        } else {
          setNum(newNum);
        }
      };

      panel.addEventListener("wheel", handleScroll);

      return () => {
        panel.removeEventListener("wheel", handleScroll);
      };
    }
  }, [num]);

  return (
    <div className="bpm-panel">
      <div ref={panelRef} className="bpm-panel__display">
        <span className="bpm-panel__label">BPM : </span>
        <span className="bpm-panel__num">{num}</span>
      </div>
      <div className="bpm-panel__btns">
        <button className="bpm-panel__btn --type_up">U</button>
        <button className="bpm-panel__btn --type_down">D</button>
        <button className="bpm-panel__btn --type_up">U</button>
        <button className="bpm-panel__btn --type_down">D</button>
      </div>
    </div>
  );
};

export default BPMPanel;
