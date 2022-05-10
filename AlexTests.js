let x = 0;
let y = 0;
let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100;
let characterY1 = 450;
let deathCount = 0;
let jumpY = 0;

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

//death count
function death() {
  fill(231, 231, 231);
  rect(50, 50, 100, 50);
  fill(0, 0, 255);
  textSize(20);
  textFont("Impact");
  text("Deaths: " + deathCount, 60, 65, 100, 50);
}

//level1

function level1on() {
  //moon1
  function moon1(y) {
    noStroke();
    fill(209, 133, 237);
    rect(0, y, 400, ground);
  }

  moon1(ground);

  //moon2
  function moon2(y) {
    noStroke();
    fill(56, 56, 56);
    rect(600, y, 300, ground);
  }

  moon2(ground);
  theFinalStar(850, 470, 10, 20, 5);
}

function level1off() {
  //moon1
  function moon1(y) {
    noStroke();
    fill(56, 56, 56);
    rect(0, y, 400, ground);
  }

  moon1(ground);

  //moon2
  function moon2(y) {
    noStroke();
    fill(99, 235, 137);
    rect(600, y, 300, ground);
  }

  moon2(ground);
  theFinalStar(850, 470, 10, 20, 5);
}

function theFinalStar(x, y, radius1, radius2, npoints) {
  fill(200, 200, 200);
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

function draw() {
  clear();

  //basic movement
  if (keyIsDown(38) && characterY1 + 50 === ground) {
    //jumping
    speed = -20;
    if (characterY1 + 50 === ground) {
      jumpY = 0;
    }
  } else if (keyIsDown(37)) {
    characterX1 = characterX1 - 5;
  } else if (keyIsDown(39)) {
    characterX1 = characterX1 + 5;
  }

  //gravity
  speed = speed + gravity;
  characterY1 = characterY1 + speed;

  death();

  if (state === "start") {
    newGame(350, 250, 200, 100);
  } else if (state === "level1on") {
    level1on(0, 0);
    character(characterX1, characterY1);

    //the caracter stays within the canvas on X axis
    if (characterX1 < 0) {
      characterX1 = 0;
    }
  } else if (state === "level1off") {
    level1off(0, 0);
    character(characterX1, characterY1);

    if (characterX1 + 50 > 900) {
      characterX1 = 900 - 50;
    }
  }

  //the character doesnt go below the platform level
  if (state === "level1on" && characterY1 + 50 >= ground) {
    if (characterX1 >= 0 && characterX1 < 400) {
      characterY1 = ground - 50;
      speed = 0;
    }
    //death count in case of falling and restart of the character to the start position
    else if (characterX1 > 400 && characterY1 > 600) {
      deathCount = deathCount + 1;
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }
  }

  //the character doesnt go below the platform level
  if (state === "level1off" && characterY1 + 50 >= ground) {
    if (characterX1 > 550 && characterX1 <= 900) {
      characterY1 = ground - 50;
      speed = 0;
    }
    //death count in case of falling and restart of the character to the start position
    else if (characterX1 < 550 && characterY1 > 600) {
      deathCount = deathCount + 1;
      characterX1 = 100;
      characterY1 = 300;
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
    characterX1 = 100;
    characterY1 = 450;
  }
}

function keyPressed() {
  if (keyCode === 32 && state === "level1on") {
    state = "level1off";
  } else if (keyCode === 32 && state === "level1off") {
    state = "level1on";
  }
}
