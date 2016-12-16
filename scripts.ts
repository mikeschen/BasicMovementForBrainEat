let canvas : HTMLCanvasElement;
let context : CanvasRenderingContext2D;
let hero = <HTMLImageElement>document.getElementById("hero");
let background = <HTMLImageElement>document.getElementById("background");

function gameLoop(): void {
  requestAnimationFrame(gameLoop);
  context.drawImage(background, 0, 0, 750, 550);
  player.draw();
}

window.onload = () =>
{
  canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
  let cwidth = canvas.width;
  let cheight = canvas.height;
  context = canvas.getContext("2d");
  document.addEventListener('keydown', keyboardInput);
  gameLoop();
}

interface iGameChar {
  draw(): void;
  x: number;
  y: number;
  speed: number;
}

class cPlayer implements iGameChar {
  constructor(public x: number, public y: number, public speed: number, public width: number, public height: number) {
    x = 0;
    y = 0;
    speed = 0;
  }
  public draw = () : void =>
  {
    context.save();
    context.translate(this.width, this.height);
    context.translate(this.x, this.y);
    context.drawImage(hero, 0, 0, 50, 60);
    context.restore();
  }
}

let player = new cPlayer(350, 300, 0, 50, 60);

function keyboardInput(event: KeyboardEvent) {
  if(event.keyCode == 37 || event.keyCode == 65) {
    player.x -= 10;
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    player.y -= 10;
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    player.x += 10;
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    player.y += 10;
  }
}
