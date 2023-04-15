class Rect {
  x: number;
  y: number;
  w: number;
  h: number;
  velocityX: number;
  velocityY: number;
  color: number[];
  vector: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    velocityX: number,
    velocityY: number,
    color: number[]
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;

    this.vector = Math.floor(Math.random() * 2);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
    // ctx.fillStyle = `rgb(120, 34, 78)`;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = `rgb(15, 23, 42)`;
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.stroke();
  }

  update(canvas: HTMLCanvasElement) {
    if (
      this.vector &&
      this.color[0] < 255 &&
      this.color[1] < 255 &&
      this.color[2] < 255
    ) {
      this.color[0]++;
      this.color[1]++;
      this.color[2]++;
    } else {
      this.vector = 0;
      this.color[0]--;
      this.color[1]--;
      this.color[2]--;

      // 色が黒になったら、色を再生成して、再度色加算ロジックへ
      if (this.color[0] <= 0 && this.color[1] <= 0 && this.color[2] <= 0) {
        const nums = [100, 100, 255];
        const shuffle = (arr: number[]) => {
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        };
        shuffle(nums);

        this.color[0] = Math.floor(Math.random() * nums[0]);
        this.color[1] = Math.floor(Math.random() * nums[1]);
        this.color[2] = Math.floor(Math.random() * nums[2]);
        this.vector = 1;
      }
    }
  }
}

type RectSystemProps = {
  canvas: HTMLCanvasElement;
  canvasW: number;
  canvasH: number;
};

class RectSystem {
  rects: Rect[] = [];

  constructor({ canvas, canvasW, canvasH }: RectSystemProps) {
    const rectXNum = 20;
    const rectYNum = 10;
    const rectW = canvasW / rectXNum;
    const rectH = canvasH / rectYNum;

    for (let i = 0; i < rectYNum; i++) {
      for (let j = 0; j < rectXNum; j++) {
        const x = rectW * j;
        const y = rectH * i;
        const w = rectW;
        const h = rectH;
        const velocityX = (Math.random() - 0.5) * 10;
        const velocityY = (Math.random() - 0.5) * 10;

        // const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        //   Math.random() * 255
        // })`;

        const color = [
          Math.floor(Math.random() * 20),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 20),
        ];
        const rect = new Rect(x, y, w, h, velocityX, velocityY, color);

        this.rects.push(rect);
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let rect of this.rects) {
      rect.draw(ctx);
    }
  }

  update(canvas: HTMLCanvasElement) {
    for (let rect of this.rects) {
      rect.update(canvas);
    }
  }
}

export default RectSystem;
