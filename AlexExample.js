let x = 0;
let y = 0;
let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100;
let characterY1 = 300;
let deathCount = 0;
let canJump = true;

//platforms level 11111
let platforms1on = [{ xPosition: 0, yPosition: 500, width: 400, height: 100 }];

let platforms1off = [
  { xPosition: 600, yPosition: 500, width: 300, height: 100 },
];

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
function character(x, y) {
  fill(247, 162, 99);
  rect(x, y, 50, 50);
  fill(255, 255, 255);
  ellipse(x + 13, y + 20, 20, 20);
  ellipse(x + 37, y + 20, 20, 20);
  fill(0, 0, 0);
  ellipse(x + 13, y + 20, 5, 5);
  ellipse(x + 37, y + 20, 5, 5);

  //ears
  fill(247, 162, 99);
  ellipse(x + 8, y, 15, 15);
  ellipse(x + 42, y, 15, 15);

  fill(245, 95, 175);
  beginShape();
  vertex(x + 20, y + 33);
  bezierVertex(x + 20, y + 43, x + 30, y + 43, x + 30, y + 33);
  endShape();
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
    rect(
      levelOn[i].xPosition,
      levelOn[i].yPosition,
      levelOn[i].width,
      levelOn[i].height
    );
  }
  let levelOff = platforms1off;
  for (let i = 0; i < levelOff.length; i++) {
    fill(255, 255, 255);
    rect(
      levelOff[i].xPosition,
      levelOff[i].yPosition,
      levelOff[i].width,
      levelOff[i].height
    );
  }
  theFinalStar(850, 470, 10, 20, 5);
}

function level1off() {
  fill(195, 247, 210);
  rect(0, 0, 900, 600);

  death();
  startText();

  let levelOn = platforms1on;
  for (let i = 0; i < levelOn.length; i++) {
    fill(255, 255, 255);
    rect(
      levelOn[i].xPosition,
      levelOn[i].yPosition,
      levelOn[i].width,
      levelOn[i].height
    );
  }
  let levelOff = platforms1off;
  for (let i = 0; i < levelOff.length; i++) {
    fill(99, 235, 137);
    rect(
      levelOff[i].xPosition,
      levelOff[i].yPosition,
      levelOff[i].width,
      levelOff[i].height
    );
  }
  theFinalStar(850, 470, 10, 20, 5);
}

function theFinalStar(x, y, radius1, radius2, npoints) {
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

function checkForCollision(x, y) {
  let collisionIsDetected = false;
  for (let i = 0; i < platforms1on.length; i++) {
    if (collisionDetectorObject(x, y, platforms1on[i])) {
      console.log("collision");
      canJump = true;
      characterY1 = platforms1on[i].yPosition - 50;
      speed = 0;
      collisionIsDetected = true;
    }
  }
  return collisionIsDetected;
}

function checkForCollision2(x, y) {
  let collisionIsDetected = false;
  for (let i = 0; i < platforms1off.length; i++) {
    if (collisionDetectorObject(x, y, platforms1off[i])) {
      console.log("collision");
      collisionIsDetected = true;
    }
  }
  return collisionIsDetected;
}

function collisionDetectorObject(x, y, object) {
  if (
    x > object.xPosition &&
    x < object.xPosition + object.width &&
    y > object.yPosition - 50 &&
    y < object.yPosition + object.height - 50
  ) {
    return true;
  } else {
    return false;
  }
}

function draw() {
  clear();

  tempCharacterX1 = characterX1;
  tempCharacterY1 = characterY1;

  //basic movement
  if (keyIsDown(38) && canJump) {
    //jumping
    speed = -20;
    canJump = false;
  }

  if (keyIsDown(37)) {
    tempCharacterX1 = tempCharacterX1 - 6;
  }
  if (keyIsDown(39)) {
    tempCharacterX1 = tempCharacterX1 + 6;
  }

  //gravity
  speed = speed + gravity;
  tempCharacterY1 = tempCharacterY1 + speed;

  if (tempCharacterX1 < 0) {
    tempCharacterX1 = 0;
  }
  if (tempCharacterX1 + 50 > 900) {
    tempCharacterX1 = 900 - 50;
  }
  const collisionIsDetected = checkForCollision(
    tempCharacterX1,
    tempCharacterY1
  );
  if (collisionIsDetected === false) {
    characterY1 = tempCharacterY1;
    characterX1 = tempCharacterX1;
  }
  if (state === "start") {
    newGame(350, 250, 200, 100);
  }
  //level 11111111111111111111
  else if (state === "level1on") {
    level1on(0, 0);
    character(characterX1, characterY1);
    if (characterY1 > 550) {
      deathCount = deathCount + 1;
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }
  } else if (state === "level1off") {
    level1off(0, 0);
    character(characterX1, characterY1);
    if (characterY1 > 550) {
      deathCount = deathCount + 1;
      characterX1 = 100;
      characterX1 = 300;
      speed = 0;
    }
  }
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
  }
}
