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
let lev1on = "level1on";
let lev1off = "level1off";
let lev2on = "level2on";
let lev2off = "level2off";
let lev3on = "level3on";
let lev3off = "level3off";
let lev4on = "level4on";
let lev4off = "level4off";
let lev5on = "level5on";
let lev5off = "level5off";
let lev6on = "level6on";
let lev6off = "level6off";
let lev7on = "level7on";
let lev7off = "level7off";
let lev8on = "level8on";
let lev8off = "level8off";
let lev9on = "level9on";
let lev9off = "level9off";
let lev10on = "level10on";
let lev10off = "level10off";
let lev11on = "level11on";
let lev11off = "level11off";

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

//some useful functions

//deadly triangles solving
function killedByTriangles(x, y) {
  audioDeath.play();
  deathCount = deathCount + 1;
  player.x = x;
  player.y = y;
  player.speedY = 0;
}

//drawing the platforms
function drawing(level, color1, color2, color3) {
  for (let i = 0; i < level.length; i++) {
    fill(color1, color2, color3);
    rect(level[i].x, level[i].y, level[i].width, level[i].height);
  }
}

//visible platforms
function idc(level, platforms) {
  if (state === level) {
    platforms.visible = true;
  } else {
    platforms.visible = false;
  }
}

//content of the level
function content(b1, b2, b3, x, y, w, h, r, p, q) {
  fill(b1, b2, b3);
  rect(0, 0, 900, 600);
  theFinalStar(x, y, w, h, r, p, q);
  death();
}

//death solving
function dead(x, y) {
  audioDeath.play();
  deathCount = deathCount + 1;
  player.x = x;
  player.y = y;
  player.speedY = 0;
}

//level Complete
function levelComplete(x, y) {
  player.x = x;
  player.y = y;
  player.speedY = 0;
  audioStar.play();
}

//level1
function level1on() {
  content(220, 220, 220, 0, 0, 10, 20, 5, 850, 470);

  fill(230, 230, 230);
  rect(600, 500, 300, 100);

  let level1On = platforms1on;
  drawing(level1On, 255, 255, 255);
}

function level1off() {
  content(50, 50, 50, 0, 0, 10, 20, 5, 850, 470);

  fill(55, 55, 55);
  rect(0, 500, 400, 100);

  let level1Off = platforms1off;
  drawing(level1Off, 0, 0, 0);
}

//level2
function level2on() {
  content(235, 219, 169, 0, 0, 10, 20, 5, 850, 100);

  let level2On = platforms2on;
  drawing(level2On, 233, 200, 95);
}

function level2off() {
  content(165, 194, 237, 0, 0, 10, 20, 5, 850, 100);

  let level2Off = platforms2off;
  drawing(level2Off, 109, 160, 234);
}

// level3
function level3on() {
  content(238, 176, 233, 0, 0, 10, 20, 5, 780, 100);

  let level3On = platforms3on;
  drawing(level3On, 232, 100, 221);
}

function level3off() {
  content(163, 194, 238, 0, 0, 10, 20, 5, 780, 100);

  let level3Off = platforms3off;
  drawing(level3Off, 111, 100, 232);
}

//level4
function level4on() {
  content(241, 179, 185, 0, 0, 10, 20, 5, 850, 200);

  let level4On = platforms4on;
  drawing(level4On, 240, 111, 124);
}

function level4off() {
  content(241, 235, 179, 0, 0, 10, 20, 5, 850, 200);

  let level4Off = platforms4off;
  drawing(level4Off, 240, 227, 111);
}

//level5
function level5on() {
  content(206, 179, 241, 0, 0, 10, 20, 5, 850, 50);

  let level5On = platforms5on;
  drawing(level5On, 161, 104, 233);
}

function level5off() {
  content(241, 237, 179, 0, 0, 10, 20, 5, 850, 50);

  let level5Off = platforms5off;
  drawing(level5Off, 229, 222, 105);
}

//level6
function level6on() {
  content(165, 237, 178, 0, 0, 10, 20, 5, 720, 470);

  let level6On = platforms6on;
  drawing(level6On, 93, 226, 118);
}

function level6off() {
  content(237, 214, 165, 0, 0, 10, 20, 5, 720, 470);

  let level6Off = platforms6off;
  drawing(level6Off, 226, 185, 93);
}

//level7
function level7on() {
  content(181, 177, 241, 0, 0, 10, 20, 5, 720, 260);

  let level7On = platforms7on;
  drawing(level7On, 104, 94, 231);
}

function level7off() {
  content(205, 241, 177, 0, 0, 10, 20, 5, 720, 260);

  let level7Off = platforms7off;
  drawing(level7Off, 153, 231, 94);
}

//level 8
function level8on() {
  content(240, 180, 174, 0, 0, 10, 20, 5, 720, 260);

  let level8On = platforms8on;
  drawing(level8On, 229, 116, 105);
}

function level8off() {
  content(174, 240, 180, 0, 0, 10, 20, 5, 720, 260);

  let level8Off = platforms8off;
  drawing(level8Off, 105, 229, 116);
}

//level 9
function level9on() {
  content(237, 203, 240, 0, 0, 10, 20, 5, 690, 50);

  let level9On = platforms9on;
  drawing(level9On, 227, 97, 239);
}

function level9off() {
  content(240, 219, 203, 0, 0, 10, 20, 5, 690, 50);

  let level9Off = platforms9off;
  drawing(level9Off, 239, 156, 97);
}

//level 10
function level10on() {
  content(238, 235, 176, 0, 0, 10, 20, 5, 830, 150);
  deadlyTriangles(0, 500);
  deadlyTriangles(400, 300);

  let level10On = platforms10on;
  drawing(level10On, 234, 228, 95);
}

function level10off() {
  content(176, 238, 235, 0, 0, 10, 20, 5, 830, 150);
  deadlyTriangles(200, 400);
  deadlyTriangles(600, 200);

  let level10Off = platforms10off;
  drawing(level10Off, 97, 219, 239);
}

//level 11
function level11on() {
  content(240, 180, 174, 0, 0, 10, 20, 5, 690, 50);

  let level11On = platforms11on;
  drawing(level11On, 229, 116, 105);
}

function level11off() {
  content(174, 240, 180, 0, 0, 10, 20, 5, 690, 50);

  let level11Off = platforms11off;
  drawing(level11Off, 105, 229, 116);
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

  idc(lev1on, platforms1on);
  idc(lev1off, platforms1off);
  idc(lev2on, platforms2on);
  idc(lev2off, platforms2off);
  idc(lev3on, platforms3on);
  idc(lev3off, platforms3off);
  idc(lev4on, platforms4on);
  idc(lev4off, platforms4off);
  idc(lev5on, platforms5on);
  idc(lev5off, platforms5off);
  idc(lev6on, platforms6on);
  idc(lev6off, platforms6off);
  idc(lev7on, platforms7on);
  idc(lev7off, platforms7off);
  idc(lev8on, platforms8on);
  idc(lev8off, platforms8off);
  idc(lev9on, platforms9on);
  idc(lev9off, platforms9off);
  idc(lev10on, platforms10on);
  idc(lev10off, platforms10off);
  idc(lev11on, platforms11on);
  idc(lev11off, platforms11off);

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
      state === lev1on ||
      state === lev1off ||
      state === lev2on ||
      state === lev2off ||
      state === lev5on ||
      state === lev5off ||
      state === lev9on ||
      state === lev9off
    ) {
      dead(100, 300);
    } else if (state === lev4on || state === lev4off) {
      dead(50, 0);
    } else if (
      state === lev3on ||
      state === lev3off ||
      state === lev10on ||
      state === lev10off
    ) {
      dead(140, 300);
    } else if (state === lev6on || state === lev6off) {
      dead(200, 0);
    } else if (state === lev8on || state === lev8off) {
      dead(180, 300);
    } else if (state === lev7on || state === lev7off) {
      dead(100, 200);
      player.speedY = 0;
    } else if (state === lev11on || state === lev11off) {
      dead(25, 300);
    }
  }

  if (state === "start") {
    newGame(350, 250, 200, 100);
  } else if (state === "controls") {
    controls();
    goBack();
  }
  //game mode
  else if (state === lev1on) {
    level1on(0, 0);
    character(player.x, player.y);
    audio.volume = 0.1;
    audio.play();
    //level complete
    if (tempCharacterX1 + 50 > 860 && tempCharacterY1 > 430) {
      state = lev2on;
      levelComplete(100, 300);
    }
  } else if (state === lev1off) {
    level1off(0, 0);
    character(player.x, player.y);
    //level complete
    if (tempCharacterX1 + 50 > 860 && tempCharacterY1 > 430) {
      state = lev2on;
      levelComplete(100, 300);
    }
  } else if (state === lev2on) {
    level2on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 150
    ) {
      state = lev3on;
      levelComplete(130, 200);
    }
  } else if (state === lev2off) {
    level2off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 150
    ) {
      state = lev3on;
      levelComplete(130, 200);
    }
  } else if (state === lev3on) {
    level3on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 780 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 <= 160
    ) {
      state = lev4on;
      levelComplete(50, 0);
    }
  } else if (state === lev3off) {
    level3off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 780 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 <= 160
    ) {
      state = lev4on;
      levelComplete(50, 0);
    }
  } else if (state === lev4on) {
    level4on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 830 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 250
    ) {
      state = lev5on;
      levelComplete(100, 300);
    }
  } else if (state === lev4off) {
    level4off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 830 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 250
    ) {
      state = lev5on;
      levelComplete(100, 300);
    }
  } else if (state === lev5on) {
    level5on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 0 &&
      tempCharacterY1 < 110
    ) {
      state = lev6on;
      levelComplete(180, 0);
    }
  } else if (state === lev5off) {
    level5off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 850 &&
      tempCharacterY1 > 0 &&
      tempCharacterY1 < 110
    ) {
      state = lev6on;
      levelComplete(180, 0);
    }
  } else if (state === lev6on) {
    level6on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 730 &&
      tempCharacterY1 > 470 &&
      tempCharacterY1 < 550
    ) {
      state = lev7on;
      levelComplete(100, 200);
    }
  } else if (state === lev6off) {
    level6off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 730 &&
      tempCharacterY1 > 470 &&
      tempCharacterY1 < 550
    ) {
      state = lev7on;
      levelComplete(100, 200);
    }
  } else if (state === lev7on) {
    level7on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = lev8on;
      levelComplete(180, 300);
    }
  } else if (state === lev7off) {
    level7off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = lev8on;
      levelComplete(180, 300);
    }
  } else if (state === lev8on) {
    level8on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = lev9on;
      levelComplete(100, 300);
    }
  } else if (state === lev8off) {
    level8off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 720 &&
      tempCharacterY1 > 250 &&
      tempCharacterY1 < 320
    ) {
      state = lev9on;
      levelComplete(100, 300);
    }
  } else if (state === lev9on) {
    level9on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 120
    ) {
      state = lev10on;
      levelComplete(140, 300);
    }
  } else if (state === lev9off) {
    level9off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 120
    ) {
      state = lev10on;
      levelComplete(140, 300);
    }
  } else if (state === lev10on) {
    level10on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 820 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 220
    ) {
      state = lev11on;
      levelComplete(25, 300);
    }
    //deadly triangles
    if (
      tempCharacterX1 > 0 &&
      tempCharacterX1 < 120 &&
      tempCharacterY1 >= 500
    ) {
      killedByTriangles(140, 300);
    }
    //deadly triangles
    if (
      tempCharacterX1 > 400 &&
      tempCharacterX1 < 520 &&
      tempCharacterY1 >= 300
    ) {
      killedByTriangles(140, 300);
    }
  } else if (state === lev10off) {
    level10off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 820 &&
      tempCharacterY1 > 150 &&
      tempCharacterY1 < 220
    ) {
      state = lev11on;
      levelComplete(25, 300);
    }
    //deadly triangles
    if (
      tempCharacterX1 > 200 &&
      tempCharacterX1 < 320 &&
      tempCharacterY1 >= 400
    ) {
      killedByTriangles(140, 300);
    }
    //deadly triangles
    if (
      tempCharacterX1 > 600 &&
      tempCharacterX1 < 720 &&
      tempCharacterY1 >= 200
    ) {
      killedByTriangles(140, 300);
    }
  } else if (state === lev11on) {
    level11on(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 320
    ) {
      state = "end";
      audioStar.play();
    }
  } else if (state === lev11off) {
    level11off(0, 0);
    character(player.x, player.y);
    //level complete
    if (
      tempCharacterX1 + 50 > 690 &&
      tempCharacterY1 > 50 &&
      tempCharacterY1 < 320
    ) {
      state = "end";
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
    state = lev1on;
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
    state = lev1on;
    x = 0;
    player.speedY = 0;
    tempCharacterX1 = 100;
    tempCharacterY1 = 450;
    deathCount = -1;
  }
}
function keyPressed() {
  if (keyCode === 32) {
    if (state === lev1on) {
      state = lev1off;
    } else if (state === lev1off) {
      state = lev1on;
    } else if (state === lev2on) {
      state = lev2off;
    } else if (state === lev2off) {
      state = lev2on;
    } else if (state === lev3on) {
      state = lev3off;
    } else if (state === lev3off) {
      state = lev3on;
    } else if (state === lev4on) {
      state = lev4off;
    } else if (state === lev4off) {
      state = lev4on;
    } else if (state === lev5on) {
      state = lev5off;
    } else if (state === lev5off) {
      state = lev5on;
    } else if (state === lev6on) {
      state = lev6off;
    } else if (state === lev6off) {
      state = lev6on;
    } else if (state === lev7on) {
      state = lev7off;
    } else if (state === lev7off) {
      state = lev7on;
    } else if (state === lev8on) {
      state = lev8off;
    } else if (state === lev8off) {
      state = lev8on;
    } else if (state === lev9on) {
      state = lev9off;
    } else if (state === lev9off) {
      state = lev9on;
    } else if (state === lev10on) {
      state = lev10off;
    } else if (state === lev10off) {
      state = lev10on;
    } else if (state === lev11on) {
      state = lev11off;
    } else if (state === lev11off) {
      state = lev11on;
    }
  }
}

//game reference: https://js13kgames.com/games/onoff/index.html
//other sources that we used:
//https://www.w3schools.com/ (general)
//https://www.youtube.com/watch?v=APivt7U4WP0&ab_channel=MichaelHulbert (jumping)
