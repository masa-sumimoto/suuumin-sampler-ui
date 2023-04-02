// import React from 'react';
import "./scss/index.scss";

import AppBody from "./components-layout/AppBody";

function App() {
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
