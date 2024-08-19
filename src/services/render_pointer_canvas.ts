interface OscillatorOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;

  // Constructor to initialize the Oscillator with optional parameters
  constructor(options: OscillatorOptions = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  // Updates the phase and calculates the new value using the sine function
  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }

  // Returns the current value based on the sine function
  value(): number {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

interface LineOptions {
  springConstant: number;
}

class Node {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

class Line {
  private springConstant: number;
  private frictionCoefficient: number;
  nodes: Node[];

  // Constructor to initialize the Line with nodes and spring properties
  constructor(options: LineOptions) {
    this.springConstant = options.springConstant + 0.1 * Math.random() - 0.05;
    this.frictionCoefficient = Settings.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < Settings.nodeCount; i++) {
      const node = new Node();
      node.x = position.x;
      node.y = position.y;
      this.nodes.push(node);
    }
  }

  // Updates the positions and velocities of the nodes based on spring dynamics
  update(): void {
    let spring = this.springConstant;
    let node = this.nodes[0];
    node.vx += (position.x - node.x) * spring;
    node.vy += (position.y - node.y) * spring;
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const previousNode = this.nodes[i - 1];
        node.vx += (previousNode.x - node.x) * spring;
        node.vy += (previousNode.y - node.y) * spring;
        node.vx += previousNode.vx * Settings.damping;
        node.vy += previousNode.vy * Settings.damping;
      }
      node.vx *= this.frictionCoefficient;
      node.vy *= this.frictionCoefficient;
      node.x += node.vx;
      node.y += node.vy;
      spring *= Settings.tension;
    }
  }

  // Draws the line connecting the nodes with quadratic curves
  draw(): void {
    let x = this.nodes[0].x,
      y = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (var i = 1, len = this.nodes.length - 2; i < len; i++) {
      const a = this.nodes[i];
      const b = this.nodes[i + 1];
      x = (a.x + b.x) * 0.5;
      y = (a.y + b.y) * 0.5;
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }
    const a = this.nodes[i];
    const b = this.nodes[i + 1];
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
    ctx.stroke();
    ctx.closePath();
  }
}

function onMouseMove(e: MouseEvent | TouchEvent): void {
  // Creates lines based on the current settings
  function createLines(): void {
    lines = [];
    for (let i = 0; i < Settings.trailCount; i++) {
      lines.push(new Line({ springConstant: 0.45 + (i / Settings.trailCount) * 0.025 }));
    }
  }

  // Handles mouse or touch movement, updating the position
  function handleMove(e: MouseEvent | TouchEvent): void {
    if ('touches' in e) {
      position.x = e.touches[0].pageX;
      position.y = e.touches[0].pageY;
    } else {
      position.x = e.clientX;
      position.y = e.clientY;
    }
    e.preventDefault();
  }

  // Handles touch start event
  function handleTouchStart(e: TouchEvent): void {
    if (e.touches.length === 1) {
      position.x = e.touches[0].pageX;
      position.y = e.touches[0].pageY;
    }
  }

  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('touchstart', onMouseMove);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove);
  document.addEventListener('touchstart', handleTouchStart);
  handleMove(e);
  createLines();
  render();
}

function getRadomColors(value: number): string {
  //187 - cyan 144 - green 
  const colorNumbers: string[] = ["185", "186", "187", "188", "144", "145",]
  return `hsla(${colorNumbers[Math.round(value) % colorNumbers.length]},90%,50%,0.25)`;
}


function render(): void {
  if (ctx.running) {
    // Clears the canvas and redraws the lines with updated positions
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    ctx.strokeStyle = getRadomColors(oscillator.update());
    ctx.lineWidth = 1;
    for (let i = 0; i < Settings.trailCount; i++) {
      const line = lines[i];
      line.update();
      line.draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

// Resizes the canvas to fit the window dimensions
function resizeCanvas(): void {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

let ctx: CanvasRenderingContext2D & { running: boolean; frame: number };
let oscillator: Oscillator;
let position: { x: number; y: number } = { x: 0, y: 0 };
let lines: Line[] = [];
const Settings = {
  debug: true,
  friction: 0.5,
  trailCount: 20,
  nodeCount: 50,
  damping: 0.20,
  tension: 0.978,
};

// Initializes the canvas and starts the animation
export const renderCanvas = function (): void {
  const canvas = document.getElementById('pointer_canvas') as HTMLCanvasElement;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D & { running: boolean; frame: number };
  ctx.running = true;
  ctx.frame = 1;
  oscillator = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchstart', onMouseMove);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener('blur', () => {
    ctx.running = true;
  });
  resizeCanvas();
};