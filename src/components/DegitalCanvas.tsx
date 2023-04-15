import React, { useRef, useEffect } from "react";
import ParticleSystem from "./canvas-contents/ParticleSystem";
import RectSystem from "./canvas-contents/RectSystem";

const DegitalCanvas: React.FC<{}> = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");

      // canvasのサイズは x2のサイズで指定
      const canvasW = canvas.current!.getBoundingClientRect().width * 2;
      const canvasH = canvas.current!.getBoundingClientRect().height * 2;
      const cmnOpts = {
        canvas: canvas.current,
        canvasW,
        canvasH,
      };

      const systems = [
        new RectSystem(cmnOpts),
        new ParticleSystem({ ...cmnOpts, numParticles: 100 }),
      ];

      // 今2つしかパターンがないので0か1かをランダムに
      const system = systems[Math.floor(Math.random() * 2)];

      if (ctx) {
        canvas.current!.width = canvasW;
        canvas.current!.height = canvasH;
        const loop = () => {
          ctx.clearRect(0, 0, canvasW, canvasH);
          system.update(canvas.current!);
          system.draw(ctx);
          requestAnimationFrame(loop);
        };

        // setTimeout(loop, 200);

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
