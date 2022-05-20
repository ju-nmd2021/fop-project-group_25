let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100;
let characterY1 = 300;
let deathCount = -1;
let canJump = true;
let r = 0.0;

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

//character object
const player = {
  x: 100,
  y: 300,
  width: 50,
  height: 50,
  speedY: 0,
  canJump: true,
};

noStroke();

//start screen
function newGame(x, y, w, h) {
  fill(31, 31, 31);
  rect(0, 0, 900, 600);

  fill(232, 232, 232);
  rect(x, y, w, h - 15);

  fill(0, 0, 0);
  textSize(40);
  textFont("Impact");
  text("NEW GAME", x + w / 12, y + h / 1.7);

  fill(255, 0, 0);
  textSize(80);
  textFont("Impact");
  text("R", x, y - h / 1.7);

  fill(0, 255, 0);
  textSize(80);
  textFont("Impact");
  text("G", x + 80, y - h / 1.7);

  fill(0, 0, 255);
  textSize(80);
  textFont("Impact");
  text("B", x + 160, y - h / 1.7);
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

function startText() {
  fill(0, 0, 0);
  textSize(30);
  textFont("Helvetica");
  text("MOVEMENT", 360, 100, 300, 300);

  textSize(20);
  text(" < go left", 400, 150, 300, 300);

  text(" > go right", 400, 180, 300, 300);

  text(" ^ jump", 400, 210, 300, 300);

  text(" SPACE change worlds", 340, 240, 300, 300);
}

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

//level1
//level1
//level1

function level1on() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();
  startText();

  let levelOn = platforms1on;
  for (let i = 0; i < levelOn.length; i++) {
    fill(209, 133, 237);
    rect(levelOn[i].x, levelOn[i].y, levelOn[i].width, levelOn[i].height);
  }

  platforms1on.visible = true;
  platforms1off.visible = false;

  theFinalStar(0, 0, 10, 20, 5, 850, 470);
}

function level1off() {
  fill(195, 247, 210);
  rect(0, 0, 900, 600);

  death();
  startText();

  let levelOff = platforms1off;
  for (let i = 0; i < levelOff.length; i++) {
    fill(99, 235, 137);
    rect(levelOff[i].x, levelOff[i].y, levelOff[i].width, levelOff[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = true;

  theFinalStar(0, 0, 10, 20, 5, 850, 470);
}

//level2
//level2
//level2

function level2on() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  let level2On = platforms2on;
  for (let i = 0; i < level2On.length; i++) {
    fill(209, 133, 237);
    rect(level2On[i].x, level2On[i].y, level2On[i].width, level2On[i].height);
  }
  platforms1on.visible = false;
  platforms1off.visible = false;
  platforms2on.visible = true;
  platforms2off.visible = false;
}

function level2off() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  let level2Off = platforms2off;
  for (let i = 0; i < level2Off.length; i++) {
    fill(209, 133, 237);
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
}

//death count
function death() {
  fill(231, 231, 231);
  rect(50, 50, 100, 50);
  fill(0, 0, 0);
  textSize(20);
  textFont("Impact");
  text("Deaths: " + deathCount, 60, 65, 100, 50);
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

  for (let platform of platforms1on) {
    if (
      platforms1on.visible === true &&
      detectCollision(player.x, tempCharacterY1, platform)
    ) {
      verticalCollisionDetected = true;
      player.y = platform.y;
    }
  }
  for (let platform of platforms1off) {
    if (
      platforms1off.visible === true &&
      detectCollision(player.x, tempCharacterY1, platform)
    ) {
      verticalCollisionDetected = true;
      player.y = platform.y;
    }
  }
  for (let platform of platforms2on) {
    if (
      platforms2on.visible === true &&
      detectCollision(player.x, tempCharacterY1, platform)
    ) {
      verticalCollisionDetected = true;
      player.y = platform.y;
    }
  }
  for (let platform of platforms2off) {
    if (
      platforms2off.visible === true &&
      detectCollision(player.x, tempCharacterY1, platform)
    ) {
      verticalCollisionDetected = true;
      player.y = platform.y;
    }
  }
  if (verticalCollisionDetected) {
    player.speedY = 0;
    player.canJump = true;
  } else {
    player.y = tempCharacterY1;
  }
  // detect horizontal collision
  let horizontalCollisionDetected = false;
  for (let platform of platforms1on) {
    if (
      platforms1on.visible === true &&
      detectCollision(tempCharacterX1, player.y, platform)
    ) {
      horizontalCollisionDetected = true;
    }
  }
  for (let platform of platforms1off) {
    if (
      platforms1off.visible === true &&
      detectCollision(tempCharacterX1, player.y, platform)
    ) {
      horizontalCollisionDetected = true;
    }
  }
  for (let platform of platforms2on) {
    if (
      platforms2on.visible === true &&
      detectCollision(tempCharacterX1, player.y, platform)
    ) {
      horizontalCollisionDetected = true;
    }
  }
  for (let platform of platforms2off) {
    if (
      platforms2off.visible === true &&
      detectCollision(tempCharacterX1, player.y, platform)
    ) {
      horizontalCollisionDetected = true;
    }
  }

  for (let platform of canvas) {
    if (detectCollision(tempCharacterX1, player.y, platform)) {
      horizontalCollisionDetected = true;
    }
  }
  if (!horizontalCollisionDetected) {
    player.x = tempCharacterX1;
  }
  ///////////////the end of collisions

  if (tempCharacterX1 < 0) {
    tempCharacterX1 = 0;
  }
  if (tempCharacterX1 + 50 > 900) {
    tempCharacterX1 = 900 - 50;
  }
  //death count
  if (player.y > 650) {
    deathCount = deathCount + 1;
    player.x = 100;
    player.y = 300;
    player.speedY = 0;
  }

  if (state === "start") {
    newGame(350, 250, 200, 100);
  }
  //level 11111111111111111111
  else if (state === "level1on") {
    level1on(0, 0);
    character(player);
    //level complete
    if (tempCharacterX1 + 50 > 830 && tempCharacterY1 > 430) {
      state = "level2on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
    }
  } else if (state === "level1off") {
    level1off(0, 0);
    character(player);
    //level complete
    if (tempCharacterX1 + 50 > 830 && tempCharacterY1 > 430) {
      state = "level2on";
      player.x = 100;
      player.y = 300;
      player.speedY = 0;
    }
  } else if (state === "level2on") {
    level2on(0, 0);
    character(player);
  } else if (state === "level2off") {
    level2off(0, 0);
    character(player);
  }

  fill(255, 255, 255);
  rect(0, 600, 900, 200);
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 350 &&
    mouseX <= 550 &&
    mouseY >= 250 &&
    mouseY <= 335
  ) {
    state = "level1on";
    x = 0;
    rocketY = 0;
    speed = 0;
    tempCharacterX1 = 100;
    tempCharacterY1 = 450;
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
  } else if (keyCode === 32 && state === "level4on") {
    state = "level4off";
  } else if (keyCode === 32 && state === "level4off") {
    state = "level4on";
  } else if (keyCode === 32 && state === "level5on") {
    state = "level5off";
  } else if (keyCode === 32 && state === "level5off") {
    state = "level5on";
  }
}
