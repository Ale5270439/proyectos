const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillStyle = "green";

// Crea un vector de 2 dimensiones
/*
COmentated

*/
function Vector2D(x, y) {
  let t = {
    x: x,
    y: y,
  };

  return t;
}

let endika = {
  pos: Vector2D(10, 10),
  sca: Vector2D(100, 150),
};
ctx.fillRect(endika.pos.x, endika.pos.y, endika.sca.x, endika.sca.y);

function frame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //endika.pos.x++;
  ctx.fillRect(endika.pos.x, endika.pos.y, endika.sca.x, endika.sca.y);
  window.requestAnimationFrame(frame);
}

frame();

