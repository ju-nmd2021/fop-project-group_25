//standard function to initialize the canvas (a 900x600 square will be shown)
function setup() {
  createCanvas(900, 600);
  background(0);
}

// platform 1 and platform 2 object (this will be two rectagles on the button of the screen)
let platformOne = {
  x: 100,
  y: 400,
  w: 250,
  h: 200,
};

let platformTwo = {
  x: 550,
  y: 300,
  w: 250,
  h: 300,
};

function draw() {
  push();
  fill(255);
  rect(platformOne.x, platformOne.y, platformOne.w, platformOne.h);
  rect(platformTwo.x, platformTwo.y, platformTwo.w, platformTwo.h);
  pop();
}
