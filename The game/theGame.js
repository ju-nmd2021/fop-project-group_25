let state = "start";
const gravity = 1;
let characterX1 = 100;
let characterY1 = 300;
let deathCount = -1;
let canJump = true;
let r = 0.0; // rotation of the star
let audio = new Audio("music.mp3");
let audioJump = new Audio("jump.mp3");
let audioStar = new Audio("star.mp3");
let audioDeath = new Audio("death.mp3");
let audioWin = new Audio("win.mp3");

// source of the code: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
function setup() {
  frameRate(30);
  var canvas = createCanvas(900, 600);
  noStroke();
  canvas.parent("sketch-holder");
}

//canvas
let canvas = [
  { x: -10, y: -10, width: 30, height: 610 },
  { x: 875, y: -10, width: 10, height: 610 },
];

//platforms level 11111
let platforms1on = [{ x: 0, y: 500, width: 400, height: 100, visible: false }];

let platforms1off = [
  { x: 600, y: 500, width: 300, height: 100, visible: false },
];

//platforms level 22222
let platforms2on = [
  { x: 0, y: 500, width: 200, height: 100, visible: false },
  { x: 600, y: 300, width: 200, height: 300, visible: false },
];

let platforms2off = [
  { x: 300, y: 400, width: 200, height: 200, visible: false },
];

//platforms level 33333

let platforms3on = [
  { x: 100, y: 400, width: 250, height: 200, visible: false },
  { x: 600, y: 150, width: 150, height: 150, visible: false },
];

let platforms3off = [
  { x: 350, y: 300, width: 200, height: 50, visible: false },
];

//platforms level 44444
let platforms4on = [
  { x: 0, y: 200, width: 100, height: 400, visible: false },

  { x: 400, y: 400, width: 100, height: 300, visible: false },

  { x: 800, y: 400, width: 100, height: 300, visible: false },
];

let platforms4off = [
  { x: 200, y: 300, width: 100, height: 300, visible: false },

  { x: 600, y: 500, width: 100, height: 300, visible: false },
];

//platforms level 55555
let platforms5on = [
  { x: 0, y: 500, width: 300, height: 100, visible: false },

  { x: 300, y: 300, width: 300, height: 300, visible: false },

  { x: 600, y: 100, width: 300, height: 500, visible: false },
];

let platforms5off = [
  { x: 200, y: 400, width: 100, height: 100, visible: false },

  { x: 500, y: 200, width: 100, height: 100, visible: false },
];

//platforms level 66666
let platforms6on = [
  { x: 150, y: 100, width: 600, height: 30, visible: false },
  { x: 150, y: 300, width: 600, height: 30, visible: false },
  { x: 150, y: 500, width: 600, height: 30, visible: false },
];

let platforms6off = [
  { x: 150, y: 200, width: 600, height: 30, visible: false },
  { x: 150, y: 400, width: 600, height: 30, visible: false },
];

//platforms level 77777

let platforms7on = [
  { x: 0, y: 300, width: 900, height: 30, visible: false },
  { x: 450, y: 0, width: 30, height: 330, visible: false },
];

let platforms7off = [];

//platforms level 88888
let platforms8on = [
  //vertical
  { x: 100, y: 200, width: 30, height: 300, visible: false },
  { x: 380, y: 200, width: 30, height: 300, visible: false },
  { x: 650, y: 200, width: 30, height: 300, visible: false },

  { x: 250, y: 200, width: 30, height: 300, visible: false },
  { x: 530, y: 200, width: 30, height: 300, visible: false },
  { x: 800, y: 200, width: 30, height: 300, visible: false },

  //horizontal
  { x: 100, y: 200, width: 180, height: 30, visible: false },
  { x: 380, y: 200, width: 180, height: 30, visible: false },
  { x: 650, y: 200, width: 180, height: 30, visible: false },

  { x: 100, y: 470, width: 180, height: 30, visible: false },
  { x: 380, y: 470, width: 180, height: 30, visible: false },
  { x: 650, y: 470, width: 180, height: 30, visible: false },
];

let platforms8off = [];

//level 99999
let platforms9on = [
  { x: 0, y: 500, width: 900, height: 100, visible: false },
  { x: 200, y: 100, width: 500, height: 30, visible: false },
  { x: 200, y: 400, width: 500, height: 30, visible: false },
  { x: 200, y: 100, width: 30, height: 300, visible: false },
  { x: 700, y: 400, width: 30, height: 130, visible: false },
];

let platforms9off = [
  { x: 0, y: 230, width: 200, height: 30, visible: false },
  { x: 700, y: 500, width: 200, height: 30, visible: false },
];

//platforms level 101010
let platforms10on = [
  { x: 0, y: 500, width: 200, height: 30, visible: false },
  { x: 400, y: 300, width: 200, height: 30, visible: false },
];

let platforms10off = [
  { x: 200, y: 400, width: 200, height: 30, visible: false },
  { x: 600, y: 200, width: 200, height: 30, visible: false },
];

// platform 11
let platforms11on = [
  { x: 0, y: 500, width: 50, height: 50, visible: false },
  { x: 200, y: 100, width: 50, height: 50, visible: false },
  { x: 200, y: 400, width: 50, height: 50, visible: false },
  { x: 200, y: 100, width: 50, height: 50, visible: false },
  { x: 700, y: 400, width: 50, height: 50, visible: false },
];

let platforms11off = [
  { x: 0, y: 250, width: 50, height: 50, visible: false },
  { x: 700, y: 500, width: 50, height: 50, visible: false },
  { x: 450, y: 150, width: 50, height: 50, visible: false },
];

//character object
const player = {
  x: 100,
  y: 300,
  width: 50,
  height: 50,
  speedY: 0,
  canJump: true,
};

//start screen
function newGame(x, y, w, h) {
  fill(31, 31, 31);
  rect(0, 0, 900, 600);

  fill(232, 232, 232);
  rect(x - 50, y + 140, w + 100, h - 35);

  fill(0, 0, 0);
  textSize(30);
  textFont("Michroma");
  text("NEW GAME", x + w / 12 - 40, y + h + 140 / 1.7);

  fill(232, 232, 232);
  rect(x - 50, y + 220, w + 100, h - 35);

  fill(0, 0, 0);
  textSize(30);
  textFont("Michroma");
  text("CONTROLS", x + w / 12 - 40, y + h + 280 / 1.7);

  fill(234, 118, 95);
  textSize(300);
  textFont("Rubik Bubbles");
  text("R", x - 250, y - h + 300 / 1.7);

  fill(95, 234, 118);
  textSize(300);
  textFont("Rubik Bubbles");
  text("G", x + 80 - 100, y - h + 300 / 1.7);

  fill(118, 95, 234);
  textSize(300);
  textFont("Rubik Bubbles");
  text("B", x + 160 + 50, y - h + 300 / 1.7);
}

// control screen
function controls() {
  fill(31, 31, 31);
  rect(0, 0, 900, 600);
  fill(255, 255, 255);
  textSize(40);
  textFont("Michroma");
  text("MOVEMENT", 140, 150, 300, 300);

  textSize(20);
  text(" PRESS  LEFT  ARROW  TO  GO  LEFT ", 140, 230, 900, 300);

  text(" PRESS  RIGHT  ARROW  TO  GO  RIGHT ", 140, 270, 900, 300);

  text(" PRESS  UP  ARROW  TO  JUMP ", 140, 310, 900, 500);

  text(" PRESS  SPACE  BAR  TO  CHANGE  THE  WORLDS", 140, 350, 900, 300);
}

//button to go back
function goBack() {
  fill(234, 114, 95);
  rect(30, 30, 30, 30);
  fill(0, 0, 0);
  textFont("Helvetica");
  textSize(20);
  text("X", 38, 53);
}

//end screen
function end(x, y, w, h) {
  fill(31, 31, 31);
  rect(0, 0, 900, 600);

  fill(232, 232, 232);
  rect(x + 100, y, w + 200, h - 30);

  fill(0, 0, 0);
  textSize(40);
  textFont("Michroma");
  text("PLAY AGAIN", x + 125, y + h - 50);

  fill(255, 0, 0);
  textSize(50);
  textFont("Michroma");
  text("CONGRATULATIONS", x - 70, y - h / 1.7);
}

//death count
function death() {
  fill(255, 255, 255);
  // rect(50, 50, 110, 50);
  fill(0, 0, 0);
  textSize(20);
  textFont("Michroma");
  rect(50, 50, 30, 15);
  rect(55, 60, 20, 15);
  push();
  fill(255);
  rect(55, 55, 5, 5);
  rect(70, 55, 5, 5);
  rect(60, 72, 3, 3);
  rect(67, 72, 3, 3);
  pop();
  text(" " + deathCount, 80, 70);
}

//character
function character(object) {
  push();
  translate(25, 0);
  fill(247, 162, 99);
  rect(player.x - 50, player.y - 50, player.width, player.height);
  fill(255, 255, 255);
  ellipse(player.x + 13 - 50, player.y + 20 - 50, 20, 20);
  ellipse(player.x + 37 - 50, player.y + 20 - 50, 20, 20);
  fill(0, 0, 0);
  ellipse(player.x + 13 - 50, player.y + 20 - 50, 5, 5);
  ellipse(player.x + 37 - 50, player.y + 20 - 50, 5, 5);

  //ears
  fill(247, 162, 99);
  ellipse(player.x + 8 - 50, player.y - 50, 15, 15);
  ellipse(player.x + 42 - 50, player.y - 50, 15, 15);

  fill(245, 95, 175);
  beginShape();
  vertex(player.x + 20 - 50, player.y + 33 - 50);
  bezierVertex(
    player.x + 20 - 50,
    player.y + 43 - 50,
    player.x + 30 - 50,
    player.y + 43 - 50,
    player.x + 30 - 50,
    player.y + 33 - 50
  );
  endShape();
  pop();
}

//source of the code: https://p5js.org/examples/form-star.html
function theFinalStar(x, y, radius1, radius2, npoints, translateX, translateY) {
  push();
  translate(translateX, translateY);
  rotate(r);
  fill(255, 255, 255);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}

function deadlyTriangles(x, y) {
  fill(0, 0, 0);
  triangle(x, y, x + 10, y - 20, x + 20, y);
  triangle(x + 20, y, x + 30, y - 20, x + 40, y);
  triangle(x + 40, y, x + 50, y - 20, x + 60, y);
  triangle(x + 60, y, x + 70, y - 20, x + 80, y);
  triangle(x + 80, y, x + 90, y - 20, x + 100, y);
}

//level1
//level1
//level1

function level1on() {
  fill(220, 220, 220);
  rect(0, 0, 900, 600);

  death();

  fill(230, 230, 230);
  rect(600, 500, 300, 100);

  let levelOn = platforms1on;
  for (let i = 0; i < levelOn.length; i++) {
    fill(255, 255, 255);
    rect(levelOn[i].x, levelOn[i].y, levelOn[i].width, levelOn[i].height);
  }
  platforms1on.visible = true;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 470);
}

function level1off() {
  fill(50, 50, 50);
  rect(0, 0, 900, 600);

  death();

  fill(55, 55, 55);
  rect(0, 500, 400, 100);

  let levelOff = platforms1off;
  for (let i = 0; i < levelOff.length; i++) {
    fill(0, 0, 0);
    rect(levelOff[i].x, levelOff[i].y, levelOff[i].width, levelOff[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = true;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = false;
  platforms9on.visible = false;
  platforms9off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 470);
}

//level2
//level2
//level2

function level2on() {
  fill(235, 219, 169);
  rect(0, 0, 900, 600);

  death();

  let level2On = platforms2on;
  for (let i = 0; i < level2On.length; i++) {
    fill(233, 200, 95);
    rect(level2On[i].x, level2On[i].y, level2On[i].width, level2On[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = true;
  platforms2off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 100);
}

function level2off() {
  push();
  fill(165, 194, 237);
  rect(0, 0, 900, 600);

  death();

  let level2Off = platforms2off;
  for (let i = 0; i < level2Off.length; i++) {
    fill(109, 160, 234);
    rect(
      level2Off[i].x,
      level2Off[i].y,
      level2Off[i].width,
      level2Off[i].height
    );
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = true;
  platforms4on.visible = false;
  platforms4off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 100);
  pop();
}

// level3

function level3on() {
  push();
  fill(238, 176, 233);
  rect(0, 0, 900, 600);

  death();

  let level3On = platforms3on;
  for (let i = 0; i < level3On.length; i++) {
    fill(232, 100, 221);
    rect(level3On[i].x, level3On[i].y, level3On[i].width, level3On[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = true;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 780, 100);
}

function level3off() {
  fill(163, 194, 238);
  rect(0, 0, 900, 600);

  death();

  let level3Off = platforms3off;
  for (let i = 0; i < level3Off.length; i++) {
    fill(111, 100, 232);
    rect(
      level3Off[i].x,
      level3Off[i].y,
      level3Off[i].width,
      level3Off[i].height
    );
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = true;
  platforms4on.visible = false;
  platforms4off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 780, 100);
  pop();
}

function level4on() {
  push();
  fill(241, 179, 185);
  rect(0, 0, 900, 600);

  death();

  let level4On = platforms4on;
  for (let i = 0; i < level4On.length; i++) {
    fill(240, 111, 124);
    rect(level4On[i].x, level4On[i].y, level4On[i].width, level4On[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = true;
  platforms4off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 200);
  pop();
}

function level4off() {
  push();
  fill(241, 235, 179);
  rect(0, 0, 900, 600);

  death();

  let level4Off = platforms4off;
  for (let i = 0; i < level4Off.length; i++) {
    fill(240, 227, 111);
    rect(
      level4Off[i].x,
      level4Off[i].y,
      level4Off[i].width,
      level4Off[i].height
    );
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 850, 200);
  pop();
}

//level5
//level5
//level5

function level5on() {
  push();
  fill(206, 179, 241);
  rect(0, 0, 900, 600);

  death();

  let level5On = platforms5on;
  for (let i = 0; i < level5On.length; i++) {
    fill(161, 104, 233);
    rect(level5On[i].x, level5On[i].y, level5On[i].width, level5On[i].height);
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = true;
  platforms5off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 50);
  pop();
}

function level5off() {
  push();
  fill(241, 237, 179);
  rect(0, 0, 900, 600);

  death();

  let level5Off = platforms5off;
  for (let i = 0; i < level5Off.length; i++) {
    fill(229, 222, 105);
    rect(
      level5Off[i].x,
      level5Off[i].y,
      level5Off[i].width,
      level5Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 850, 50);
  pop();
}

//level6
function level6on() {
  push();
  fill(165, 237, 178);
  rect(0, 0, 900, 600);

  death();

  let level6On = platforms6on;
  for (let i = 0; i < level6On.length; i++) {
    fill(93, 226, 118);
    rect(level6On[i].x, level6On[i].y, level6On[i].width, level6On[i].height);
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = true;
  platforms6off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 720, 470);
  pop();
}

function level6off() {
  push();
  fill(237, 214, 165);
  rect(0, 0, 900, 600);

  death();

  let level6Off = platforms6off;
  for (let i = 0; i < level6Off.length; i++) {
    fill(226, 185, 93);
    rect(
      level6Off[i].x,
      level6Off[i].y,
      level6Off[i].width,
      level6Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 720, 470);
  pop();
}

//level7
function level7on() {
  push();
  fill(181, 177, 241);
  rect(0, 0, 900, 600);

  death();

  let level7On = platforms7on;
  for (let i = 0; i < level7On.length; i++) {
    fill(104, 94, 231);
    rect(level7On[i].x, level7On[i].y, level7On[i].width, level7On[i].height);
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = true;
  platforms7off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 720, 260);
  pop();
}

function level7off() {
  push();
  fill(205, 241, 177);
  rect(0, 0, 900, 600);

  death();

  let level7Off = platforms7off;
  for (let i = 0; i < level7Off.length; i++) {
    fill(153, 231, 94);
    rect(
      level7Off[i].x,
      level7Off[i].y,
      level7Off[i].width,
      level7Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 720, 260);
  pop();
}

//level 8
function level8on() {
  push();
  fill(240, 180, 174);
  rect(0, 0, 900, 600);

  death();

  let level8On = platforms8on;
  for (let i = 0; i < level8On.length; i++) {
    fill(229, 116, 105);
    rect(level8On[i].x, level8On[i].y, level8On[i].width, level8On[i].height);

    platforms1on.visible = false;
    platforms1off.visible = false;
    platforms2on.visible = false;
    platforms2off.visible = false;
    platforms3on.visible = false;
    platforms3off.visible = false;
    platforms4on.visible = false;
    platforms4off.visible = false;
    platforms5on.visible = false;
    platforms5off.visible = false;
    platforms6on.visible = false;
    platforms6off.visible = false;
    platforms7on.visible = false;
    platforms7off.visible = false;
    platforms8on.visible = true;
    platforms8off.visible = false;

    theFinalStar(0, 0, 10, 20, 5, 720, 260);
    pop();
  }
}

function level8off() {
  push();
  fill(174, 240, 180);
  rect(0, 0, 900, 600);

  death();

  let level8Off = platforms8off;
  for (let i = 0; i < level8Off.length; i++) {
    fill(105, 229, 116);
    rect(
      level8Off[i].x,
      level8Off[i].y,
      level8Off[i].width,
      level8Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 720, 260);
  pop();
}

//level 9
function level9on() {
  push();
  fill(237, 203, 240);
  rect(0, 0, 900, 600);

  death();

  let level9On = platforms9on;
  for (let i = 0; i < level9On.length; i++) {
    fill(227, 97, 239);
    rect(level9On[i].x, level9On[i].y, level9On[i].width, level9On[i].height);

    platforms1on.visible = false;
    platforms1off.visible = false;
    platforms2on.visible = false;
    platforms2off.visible = false;
    platforms3on.visible = false;
    platforms3off.visible = false;
    platforms4on.visible = false;
    platforms4off.visible = false;
    platforms5on.visible = false;
    platforms5off.visible = false;
    platforms6on.visible = false;
    platforms6off.visible = false;
    platforms7on.visible = false;
    platforms7off.visible = false;
    platforms8on.visible = false;
    platforms8off.visible = false;
    platforms9on.visible = true;
    platforms9off.visible = false;

    theFinalStar(0, 0, 10, 20, 5, 690, 50);
    pop();
  }
}

function level9off() {
  push();
  fill(240, 219, 203);
  rect(0, 0, 900, 600);

  death();

  let level9Off = platforms9off;
  for (let i = 0; i < level9Off.length; i++) {
    fill(239, 156, 97);
    rect(
      level9Off[i].x,
      level9Off[i].y,
      level9Off[i].width,
      level9Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = false;
  platforms9on.visible = false;
  platforms9off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 690, 50);
  pop();
}

//level 10
function level10on() {
  push();
  fill(238, 235, 176);
  rect(0, 0, 900, 600);

  death();
  deadlyTriangles(0, 500);
  deadlyTriangles(400, 300);

  let level10On = platforms10on;
  for (let i = 0; i < level10On.length; i++) {
    fill(234, 228, 95);
    rect(
      level10On[i].x,
      level10On[i].y,
      level10On[i].width,
      level10On[i].height
    );

    platforms1on.visible = false;
    platforms1off.visible = false;
    platforms2on.visible = false;
    platforms2off.visible = false;
    platforms3on.visible = false;
    platforms3off.visible = false;
    platforms4on.visible = false;
    platforms4off.visible = false;
    platforms5on.visible = false;
    platforms5off.visible = false;
    platforms6on.visible = false;
    platforms6off.visible = false;
    platforms7on.visible = false;
    platforms7off.visible = false;
    platforms8on.visible = false;
    platforms8off.visible = false;
    platforms9on.visible = false;
    platforms9off.visible = false;
    platforms10on.visible = true;
    platforms10off.visible = false;

    theFinalStar(0, 0, 10, 20, 5, 830, 150);
    pop();
  }
}

function level10off() {
  push();
  fill(176, 238, 235);
  rect(0, 0, 900, 600);

  death();

  deadlyTriangles(200, 400);
  deadlyTriangles(600, 200);

  let level10Off = platforms10off;
  for (let i = 0; i < level10Off.length; i++) {
    fill(97, 219, 239);
    rect(
      level10Off[i].x,
      level10Off[i].y,
      level10Off[i].width,
      level10Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = false;
  platforms9on.visible = false;
  platforms9off.visible = false;
  platforms10on.visible = false;
  platforms10off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 830, 150);
  pop();
}

//level 11
function level11on() {
  push();
  fill(240, 180, 174);
  rect(0, 0, 900, 600);

  death();

  let level11On = platforms11on;
  for (let i = 0; i < level11On.length; i++) {
    fill(229, 116, 105);
    rect(
      level11On[i].x,
      level11On[i].y,
      level11On[i].width,
      level11On[i].height
    );

    platforms1on.visible = false;
    platforms1off.visible = false;
    platforms2on.visible = false;
    platforms2off.visible = false;
    platforms3on.visible = false;
    platforms3off.visible = false;
    platforms4on.visible = false;
    platforms4off.visible = false;
    platforms5on.visible = false;
    platforms5off.visible = false;
    platforms6on.visible = false;
    platforms6off.visible = false;
    platforms7on.visible = false;
    platforms7off.visible = false;
    platforms8on.visible = false;
    platforms8off.visible = false;
    platforms9on.visible = false;
    platforms9off.visible = false;
    platforms10on.visible = false;
    platforms10off.visible = false;
    platforms11on.visible = true;
    platforms11off.visible = false;

    theFinalStar(0, 0, 10, 20, 5, 690, 50);
    pop();
  }
}

function level11off() {
  push();
  fill(174, 240, 180);
  rect(0, 0, 900, 600);

  death();

  let level11Off = platforms11off;
  for (let i = 0; i < level11Off.length; i++) {
    fill(105, 229, 116);
    rect(
      level11Off[i].x,
      level11Off[i].y,
      level11Off[i].width,
      level11Off[i].height
    );
  }

  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = false;
  platforms2off.visible = false;
  platforms3on.visible = false;
  platforms3off.visible = false;
  platforms4on.visible = false;
  platforms4off.visible = false;
  platforms5on.visible = false;
  platforms5off.visible = false;
  platforms6on.visible = false;
  platforms6off.visible = false;
  platforms7on.visible = false;
  platforms7off.visible = false;
  platforms8on.visible = false;
  platforms8off.visible = false;
  platforms9on.visible = false;
  platforms9off.visible = false;
  platforms10on.visible = false;
  platforms10off.visible = false;
  platforms11on.visible = false;
  platforms11off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 690, 50);
  pop();
}

//collision detection
function detectCollision(x, y, object) {
  return (
    x > object.x &&
    x < object.x + object.width &&
    y > object.y &&
    y < object.y + object.height
  );
}

function draw() {
  clear();

  let tempCharacterX1 = player.x;
  let tempCharacterY1 = player.y;

  //basic movement
  if (keyIsDown(38) && player.canJump) {
    //jumping
    player.speedY = -20;
    player.canJump = false;
    audioJump.play();
  }
  if (keyIsDown(37)) {
    tempCharacterX1 = tempCharacterX1 - 6;
  }
  if (keyIsDown(39)) {
    tempCharacterX1 = tempCharacterX1 + 6;
  }

  //star
  r = r + 0.1;

  //gravity
  player.speedY += gravity;
  tempCharacterY1 += player.speedY;

  /////////collisions
  // detect vertical collision
  let verticalCollisionDetected = false;

  function verticalDetection(level) {
    for (let platform of level) {
      if (
        level.visible === true &&
        detectCollision(player.x, tempCharacterY1, platform)
      ) {
        verticalCollisionDetected = true;
        player.y = platform.y;
      }
    }
  }
  verticalDetection(platforms1on);
  verticalDetection(platforms1off);
  verticalDetection(platforms2on);
  verticalDetection(platforms2off);
  verticalDetection(platforms3on);
  verticalDetection(platforms3off);
  verticalDetection(platforms4on);
  verticalDetection(platforms4off);
  verticalDetection(platforms5on);
  verticalDetection(platforms5off);
  verticalDetection(platforms6on);
  verticalDetection(platforms6off);
  verticalDetection(platforms7on);
  verticalDetection(platforms7off);
  verticalDetection(platforms8on);
  verticalDetection(platforms8off);
  verticalDetection(platforms9on);
  verticalDetection(platforms9off);
  verticalDetection(platforms10on);
  verticalDetection(platforms10off);
  verticalDetection(platforms11on);
  verticalDetection(platforms11off);

  //solving collision
  if (verticalCollisionDetected) {
    player.speedY = 0;
    player.canJump = true;
  } else {
    player.y = tempCharacterY1;
  }
  // detect horizontal collision
  let horizontalCollisionDetected = false;

  function horizontalDetection(level) {
    for (let platform of level) {
      if (
        level.visible === true &&
        detectCollision(tempCharacterX1, player.y, platform)
      ) {
        horizontalCollisionDetected = true;
      }
    }
  }
  horizontalDetection(platforms1on);
  horizontalDetection(platforms1off);
  horizontalDetection(platforms2on);
  horizontalDetection(platforms2off);
  horizontalDetection(platforms3on);
  horizontalDetection(platforms3off);
  horizontalDetection(platforms4on);
  horizontalDetection(platforms4off);
  horizontalDetection(platforms5on);
  horizontalDetection(platforms5off);
  horizontalDetection(platforms6on);
  horizontalDetection(platforms6off);
  horizontalDetection(platforms7on);
  horizontalDetection(platforms7off);
  horizontalDetection(platforms8on);
  horizontalDetection(platforms8off);
  horizontalDetection(platforms9on);
  horizontalDetection(platforms9off);
  horizontalDetection(platforms10on);
  horizontalDetection(platforms10off);
  horizontalDetection(platforms11on);
  horizontalDetection(platforms11off);

  //solving collision
  for (let platform of canvas) {
    if (detectCollision(tempCharacterX1, player.y, platform)) {
      horizontalCollisionDetected = true;
    }
  }
  if (!horizontalCollisionDetected) {
    player.x = tempCharacterX1;
  }
  ///////////////the end of collisions

  //death count
  if (player.y > 650) {
    if (
      state === "level1on" ||
      state === "level1off" ||
      state === "level2on" ||
      state === "level2off" ||
      state === "level5on" ||
      state === "level5off" ||
      state === "level9on" ||
      state === "level9off"
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
    } else if (state === "level4on" || state === "level4off") {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 50;
      player.y = 0;
      player.speedY = 0;
    } else if (
      state === "level3on" ||
      state === "level3off" ||
      state === "level10on" ||
      state === "level10off"
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
    } else if (state === "level6on" || state === "level6off") {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 200;
      player.y = 0;
      player.speedY = 0;
    } else if (state === "level8on" || state === "level8off") {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 180;
      player.y = 300;
      player.speedY = 0;
    } else if (state === "level7on" || state === "level7off") {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 100;
      player.y = 200;
      player.speedY = 0;
    } else if (state === "level11on" || state === "level11off") {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 25;
      player.y = 300;
      player.speedY = 0;
    }
  }

  if (state === "start") {
    newGame(350, 250, 200, 100);
  } else if (state === "controls") {
    controls();
    goBack();
  }
  //game mode
  else if (state === "level1on") {
    level1on(0, 0);
    character(player.x, player.y);
    audio.volume = 0.1;
    audio.play();
    //level complete
    if (tempCharacterX1 + 50 > 860 && tempCharacterY1 > 430) {
      state = "level2on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level1off") {
    level1off(0, 0);
    character(player.x, player.y);
    //level complete
    if (tempCharacterX1 + 50 > 860 && tempCharacterY1 > 430) {
      state = "level2on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level2on") {
    level2on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 150
    ) {
      state = "level3on";
      player.x = 130;
      player.y = 200;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level2off") {
    level2off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 150
    ) {
      state = "level3on";
      player.x = 130;
      player.y = 200;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level3on") {
    level3on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 780 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 <= 160
    ) {
      state = "level4on";
      player.x = 50;
      player.y = 0;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level3off") {
    level3off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 780 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 <= 160
    ) {
      state = "level4on";
      player.x = 50;
      player.y = 0;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level4on") {
    level4on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 830 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 250
    ) {
      state = "level5on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level4off") {
    level4off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 830 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 250
    ) {
      state = "level5on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level5on") {
    level5on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 0 &&
      tempCharacterY1 < 110
    ) {
      state = "level6on";
      player.x = 180;
      player.y = 0;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level5off") {
    level5off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 0 &&
      tempCharacterY1 < 110
    ) {
      state = "level6on";
      player.x = 180;
      player.y = 0;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level6on") {
    level6on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 730 &&
      tempCharacterY1 > 470 &&
      tempCharacterY1 < 550
    ) {
      state = "level7on";
      player.x = 100;
      player.y = 200;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level6off") {
    level6off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 730 &&
      tempCharacterY1 > 470 &&
      tempCharacterY1 < 550
    ) {
      state = "level7on";
      player.x = 100;
      player.y = 200;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level7on") {
    level7on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = "level8on";
      player.x = 180;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level7off") {
    level7off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = "level8on";
      player.x = 180;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level8on") {
    level8on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = "level9on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level8off") {
    level8off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = "level9on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level9on") {
    level9on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 120
    ) {
      state = "level10on";
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level9off") {
    level9off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 120
    ) {
      state = "level10on";
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level10on") {
    level10on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 820 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 220
    ) {
      state = "level11on";
      player.x = 25;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
    //deadly triangles
    if (
      tempCharacterX1 > 0 &&
      tempCharacterX1 < 120 &&
      tempCharacterY1 >= 500
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
    }
    //deadly triangles
    if (
      tempCharacterX1 > 400 &&
      tempCharacterX1 < 520 &&
      tempCharacterY1 >= 300
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
    }
  } else if (state === "level10off") {
    level10off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 820 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 220
    ) {
      state = "level11on";
      player.x = 25;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
    //deadly triangles
    if (
      tempCharacterX1 > 200 &&
      tempCharacterX1 < 320 &&
      tempCharacterY1 >= 400
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
    }
    //deadly triangles
    if (
      tempCharacterX1 > 600 &&
      tempCharacterX1 < 720 &&
      tempCharacterY1 >= 200
    ) {
      audioDeath.play();
      deathCount = deathCount + 1;
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
    }
  } else if (state === "level11on") {
    level11on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 320
    ) {
      state = "end";
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "level11off") {
    level11off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 320
    ) {
      state = "end";
      player.x = 140;
      player.y = 300;
      player.speedY = 0;
      audioStar.play();
    }
  } else if (state === "end") {
    end(150, 250, 200, 100);
    audioWin.play();
  }
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 390 &&
    mouseY <= 455
  ) {
    state = "level1on";
    x = 0;
    player.speedY = 0;
    tempCharacterX1 = 100;
    tempCharacterY1 = 450;
  } else if (
    state === "start" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 470 &&
    mouseY <= 535
  ) {
    state = "controls";
  } else if (
    state === "controls" &&
    mouseX >= 30 &&
    mouseX <= 60 &&
    mouseY >= 30 &&
    mouseY <= 60
  ) {
    state = "start";
  }
  if (
    state === "end" &&
    mouseX >= 250 &&
    mouseX <= 650 &&
    mouseY >= 250 &&
    mouseY <= 320
  ) {
    state = "level1on";
    x = 0;
    player.speedY = 0;
    tempCharacterX1 = 100;
    tempCharacterY1 = 450;
    deathCount = -1;
  }
}

function keyPressed() {
  if (keyCode === 32 && state === "level1on") {
    state = "level1off";
  } else if (keyCode === 32 && state === "level1off") {
    state = "level1on";
  } else if (keyCode === 32 && state === "level2on") {
    state = "level2off";
  } else if (keyCode === 32 && state === "level2off") {
    state = "level2on";
  } else if (keyCode === 32 && state === "level3on") {
    state = "level3off";
  } else if (keyCode === 32 && state === "level3off") {
    state = "level3on";
  } else if (keyCode === 32 && state === "level4on") {
    state = "level4off";
  } else if (keyCode === 32 && state === "level4off") {
    state = "level4on";
  } else if (keyCode === 32 && state === "level5on") {
    state = "level5off";
  } else if (keyCode === 32 && state === "level5off") {
    state = "level5on";
  } else if (keyCode === 32 && state === "level6on") {
    state = "level6off";
  } else if (keyCode === 32 && state === "level6off") {
    state = "level6on";
  } else if (keyCode === 32 && state === "level7on") {
    state = "level7off";
  } else if (keyCode === 32 && state === "level7off") {
    state = "level7on";
  } else if (keyCode === 32 && state === "level8on") {
    state = "level8off";
  } else if (keyCode === 32 && state === "level8off") {
    state = "level8on";
  } else if (keyCode === 32 && state === "level9on") {
    state = "level9off";
  } else if (keyCode === 32 && state === "level9off") {
    state = "level9on";
  } else if (keyCode === 32 && state === "level10on") {
    state = "level10off";
  } else if (keyCode === 32 && state === "level10off") {
    state = "level10on";
  } else if (keyCode === 32 && state === "level11on") {
    state = "level11off";
  } else if (keyCode === 32 && state === "level11off") {
    state = "level11on";
  }
}

//game reference: https://js13kgames.com/games/onoff/index.html
//other sources that we used:
//https://www.w3schools.com/ (general)
//https://www.youtube.com/watch?v=APivt7U4WP0&ab_channel=MichaelHulbert (jumping)
