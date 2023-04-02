import React, { useRef, useEffect } from "react";
import ParticleSystem from "./canvas-contents/ParticleSystem";

const DegitalCanvas: React.FC<{}> = () => {
  let canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      const particleSystem = new ParticleSystem(canvas.current, 100);

      if (ctx) {
        const loop = () => {
          canvas.current!.width = canvas.current!.getBoundingClientRect().width;
          canvas.current!.height =
            canvas.current!.getBoundingClientRect().height;
          ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
          particleSystem.update(canvas.current!);
          particleSystem.draw(ctx);
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
