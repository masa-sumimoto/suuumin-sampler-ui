class Particle {
  x: number;
  y: number;
  size: number;
  velocityX: number;
  velocityY: number;
  color: string;

  constructor(
    x: number,
    y: number,
    size: number,
    velocityX: number,
    velocityY: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(canvas: HTMLCanvasElement) {
    if (this.x < 0 || this.x > canvas.width) {
      this.velocityX = -this.velocityX;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.velocityY = -this.velocityY;
    }
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

type ParticleSystemProps = {
  canvas: HTMLCanvasElement;
  canvasW: number;
  canvasH: number;
  numParticles: number;
};

class ParticleSystem {
  particles: Particle[] = [];

  constructor({ canvas, canvasW, canvasH, numParticles }: ParticleSystemProps) {
    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvasW;
      const y = Math.random() * canvasH;
      const size = Math.floor(Math.random() * 8) + 4;
      const velocityX = (Math.random() - 0.5) * 10;
      const velocityY = (Math.random() - 0.5) * 10;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;

      const particle = new Particle(x, y, size, velocityX, velocityY, color);
      this.particles.push(particle);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let particle of this.particles) {
      particle.draw(ctx);
    }
  }

  update(canvas: HTMLCanvasElement) {
    for (let particle of this.particles) {
      particle.update(canvas);
    }
  }
}

export default ParticleSystem;
