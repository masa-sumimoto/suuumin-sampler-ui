import React, { useRef, useEffect } from "react";
import ParticleSystem from "./canvas-contents/ParticleSystem";
import RectSystem from "./canvas-contents/RectSystem";

const DegitalCanvas: React.FC<{}> = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      const systems = [
        new RectSystem(canvas.current),
        new ParticleSystem(canvas.current, 100),
      ];

      // 今2つしかパターンがないので0か1かをランダムに
      const system = systems[Math.floor(Math.random() * 2)];

      if (ctx) {
        const loop = () => {
          // x2で高解像度に
          canvas.current!.width =
            canvas.current!.getBoundingClientRect().width * 2;
          canvas.current!.height =
            canvas.current!.getBoundingClientRect().height * 2;
          ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
          system.update(canvas.current!);
          system.draw(ctx);
          requestAnimationFrame(loop);
        };

        loop();
      }
    }
  }, []);

  return (
    <div className="app-col-12">
      <div className="degital-canvas">
        <canvas ref={canvas}>this is canvas</canvas>
      </div>
    </div>
  );
};

export default DegitalCanvas;
