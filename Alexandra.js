let x = 0;
let y = 0;
let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100;
let characterY1 = 450;
let deathCount = 0;

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

function level1() {
  //moon1
  function moon1(y) {
    noStroke();
    fill(209, 133, 237);
    rect(0, y, 400, ground);
  }

  //moon2
  function moon2(y) {
    noStroke();
    fill(99, 235, 137);
    rect(600, y, 300, ground);
  }

  //character
  function character(x, y) {
    fill(255, 255, 0);
    rect(x, y, 50, 50);
  }

  moon1(ground);
  moon2(ground);
  character(characterX1, characterY1);
}

function draw() {
  clear();

  if (keyIsDown(38)) {
    //jumping
  } else if (keyIsDown(37)) {
    characterX1 = characterX1 - 5;
  } else if (keyIsDown(39)) {
    characterX1 = characterX1 + 5;
  }
  speed = speed + gravity;
  characterY1 = characterY1 + speed;

  if (characterX1 < 0) {
    characterX1 = 0;
  }

  death();

  if (state === "start") {
    newGame(350, 250, 200, 100);
  } else if (state === "level1") {
    level1(0, 0);

    if (characterY1 + 50 > ground) {
      if (
        (characterX1 >= 0 && characterX1 < 400) ||
        (characterX1 > 600 && characterX1 <= 900)
      ) {
        characterY1 = ground - 50;
        speed = 0;
      } else if (characterX1 > 400 && characterX1 < 600 && characterY1 > 610) {
        deathCount = deathCount + 1;
        character(characterX1, characterY1);
      }
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
    state = "level1";
    x = 0;
    rocketY = 0;
    speed = 0;
    characterX1 = 100;
    characterY1 = 450;
  }
}
