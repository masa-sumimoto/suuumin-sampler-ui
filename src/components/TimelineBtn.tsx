import React, { ReactNode, ReactElement } from "react";

import IconTimelineBtnBack from "../icons/IconTimelineBtnBack";
import IconTimelineBtnPause from "../icons/IconTimelineBtnPause";
import IconTimelineBtnPausePlay from "../icons/IconTimelineBtnPausePlay";
import IconTimelineBtnPlay from "../icons/IconTimelineBtnPlay";
import IconTimelineBtnRec from "../icons/IconTimelineBtnRec";
import IconTimelineBtnStop from "../icons/IconTimelineBtnStop";

import "../scss/timeline-btn.scss";

type Props = {
  role?: string;
};

const TimelineBtn: React.FC<Props> = ({ role }) => {
  return (
    <button className="timeline-btn">
      <span className="timeline-btn__icon-wrap">
        {role === "back" && <IconTimelineBtnBack />}
        {role === "pause" && <IconTimelineBtnPause />}
        {role === "pause-play" && <IconTimelineBtnPausePlay />}
        {role === "play" && <IconTimelineBtnPlay />}
        {role === "rec" && <IconTimelineBtnRec />}
        {role === "stop" && <IconTimelineBtnStop />}
      </span>
    </button>
  );
};

export default TimelineBtn;
