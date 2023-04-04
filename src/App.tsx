import React, { useEffect } from "react";
import "./scss/index.scss";

import { useTimeStore } from "./stores/timeStore";
import { useBankStore } from "./stores/bankStore";

import AppBody from "./components-layout/AppBody";

function App() {
  const { measure, changeMeasure } = useTimeStore();
  const { bankId } = useBankStore();

  useEffect(() => {
    setTimeout(() => {
      if (measure === 4) {
        changeMeasure(1);
      } else {
        changeMeasure(measure + 1);
      }
    }, 1000);
  }, [measure]);

  return (
    <div className="meta-wrap">
      <div className="meta-info">
        <h1 className="meta-ttl">SUUUMIN SAMPLER UI</h1>
        <a
          className="meta-github-link"
          href="https://github.com/masa-sumimoto/suuumin-sampler-ui"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="app">
        <AppBody />
      </div>
    </div>
  );
}

export default App;
