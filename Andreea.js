//standard function to initialize the canvas (a 900x600 square will be shown)
let y;
let x;

function setup() {
  createCanvas(900, 600);
  background(0);
  x = 0;
  y = 0;
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

//  the character intial point, it will fall when the level is starting

let character = {
  x: 100,
  y: 350,
  w: 50,
  h: 50,
};
// defining constants for the boundaries of the platforms
const pltformOneHorizontalLimitLeft = 100;
const pltformOneHorizontalLimitRight = 350;

const pltformTwoHorizontalLimitLeft = 550;
const pltformTwoHorizontalLimitRight = 800;

function draw() {
  // platform
  push();
  fill(255);
  rect(platformOne.x, platformOne.y, platformOne.w, platformOne.h);
  rect(platformTwo.x, platformTwo.y, platformTwo.w, platformTwo.h);

  // character

  rect(x + character.x, y + character.y, character.w, character.h);
  pop();

  // the character should move right and left

  if (keyIsPressed) {
    if (key == "ArrowRight") {
      x = x + 1;
    }
  }

  if (keyIsPressed) {
    if (key == "ArrowLeft") {
      x = x - 0.5;
    }
  }
}
