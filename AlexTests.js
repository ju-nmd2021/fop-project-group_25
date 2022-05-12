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
let canJump = true;

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

//level1
//level1
//level1

function level1on() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  fill(0, 0, 0);
  textSize(30);
  textFont("Helvetica");
  text("MOVEMENT", 360, 100, 300, 300);

  textSize(20);
  text(" < go left", 400, 150, 300, 300);

  text(" > go right", 400, 180, 300, 300);

  text(" ^ jump", 400, 210, 300, 300);

  text(" SPACE change worlds", 340, 240, 300, 300);

  //moon1
  function moon1(y) {
    noStroke();
    fill(209, 133, 237);
    rect(0, y, 400, 100);
  }

  //moon2
  function moon2(y) {
    noStroke();
    fill(56, 56, 56);
    rect(600, y, 300, 100);
  }

  moon1(ground);
  moon2(ground);
  theFinalStar(850, 470, 10, 20, 5);
}

function level1off() {
  fill(195, 247, 210);
  rect(0, 0, 900, 600);

  death();

  fill(0, 0, 0);
  textSize(30);
  textFont("Helvetica");
  text("MOVEMENT", 360, 100, 300, 300);

  textSize(20);
  text(" < go left", 400, 150, 300, 300);

  text(" > go right", 400, 180, 300, 300);

  text(" ^ jump", 400, 210, 300, 300);

  text(" SPACE change worlds", 340, 240, 300, 300);

  //moon1
  function moon1(y) {
    noStroke();
    fill(56, 56, 56);
    rect(0, y, 400, 100);
  }

  //moon2
  function moon2(y) {
    noStroke();
    fill(99, 235, 137);
    rect(600, y, 300, 100);
  }

  moon1(ground);
  moon2(ground);
  theFinalStar(850, 470, 10, 20, 5);
}

//level2
//level2
//level2

function level2on() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  //moon1
  function moon1(y) {
    noStroke();
    fill(209, 133, 237);
    rect(0, y, 200, 100);
  }

  //moon2
  function moon2(y) {
    noStroke();
    fill(56, 56, 56);
    rect(300, y - 100, 200, 200);
  }

  //moon3
  function moon3(y) {
    noStroke();
    fill(209, 133, 237);
    rect(600, y - 200, 200, 300);
  }

  moon1(ground);
  moon2(ground);
  moon3(ground);
  theFinalStar(850, 200, 10, 20, 5);
}

function level2off() {
  fill(195, 247, 210);
  rect(0, 0, 900, 600);

  death();

  //moon1
  function moon1(y) {
    noStroke();
    fill(56, 56, 56);
    rect(0, y, 200, 100);
  }

  //moon2
  function moon2(y) {
    noStroke();
    fill(99, 235, 137);
    rect(300, y - 100, 200, 200);
  }

  //moon3
  function moon3(y) {
    noStroke();
    fill(56, 56, 56);
    rect(600, y - 200, 200, 300);
  }

  moon1(ground);
  moon2(ground);
  moon3(ground);
  theFinalStar(850, 200, 10, 20, 5);
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
  fill(0, 0, 255);
  textSize(20);
  textFont("Impact");
  text("Deaths: " + deathCount, 60, 65, 100, 50);
}

function draw() {
  clear();

  //basic movement
  if (keyIsDown(38) && canJump) {
    //jumping
    speed = -20;
    canJump = false;
    if (characterY1 + 50 === ground) {
      jumpY = 0;
    }
  } else if (keyIsDown(37)) {
    characterX1 = characterX1 - 6;
  } else if (keyIsDown(39)) {
    characterX1 = characterX1 + 6;
  }

  //gravity
  speed = speed + gravity;
  characterY1 = characterY1 + speed;

  if (characterX1 < 0) {
    characterX1 = 0;
  }
  if (characterX1 + 50 > 900) {
    characterX1 = 900 - 50;
  }

  if (state === "start") {
    newGame(350, 250, 200, 100);
  }
  //level 11111111111111111111
  else if (state === "level1on") {
    level1on(0, 0);
    character(characterX1, characterY1);

    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 430) {
      state = "level2on";
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }

    //the character doesnt go below the platform level ON
    if (state === "level1on" && characterY1 + 50 >= ground) {
      if (characterX1 >= 0 && characterX1 < 400) {
        characterY1 = ground - 50;
        canJump = true;
        speed = 0;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterX1 > 400 && characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 100;
        characterY1 = 300;
        speed = 0;
      }
    }
  } else if (state === "level1off") {
    level1off(0, 0);
    character(characterX1, characterY1);

    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 430) {
      state = "level2on";
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }

    //the character doesnt go below the platform level OFF
    if (state === "level1off" && characterY1 + 50 >= ground) {
      if (characterX1 > 550 && characterX1 <= 900) {
        characterY1 = ground - 50;
        speed = 0;
        canJump = true;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 100;
        characterY1 = 300;
        speed = 0;
      }
    }

    //level 222222222222222
  } else if (state === "level2on") {
    level2on(0, 0);
    character(characterX1, characterY1);

    //the character doesnt go below the platform level ON
    if (state === "level2on") {
      if (characterX1 >= 0 && characterX1 < 200 && characterY1 + 50 >= ground) {
        characterY1 = ground - 50;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 550 &&
        characterX1 < 800 &&
        characterY1 + 250 >= ground
      ) {
        characterY1 = ground - 250;
        speed = 0;
        canJump = true;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterX1 > 200 && characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 100;
        characterY1 = 300;
        speed = 0;
      }
    }
  } else if (state === "level2off") {
    level2off(0, 0);
    character(characterX1, characterY1);

    //the character doesnt go below the platform level OFF
    if (state === "level2off" && characterY1 + 50 >= ground - 100) {
      if (characterX1 > 250 && characterX1 <= 500) {
        characterY1 = ground - 150;
        speed = 0;
        canJump = true;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterX1 < 250 || characterX1 > 500) {
        if (characterY1 > 550) {
          deathCount = deathCount + 1;
          characterX1 = 100;
          characterY1 = 300;
          speed = 0;
        }
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
  } else if (keyCode === 32 && state === "level2on") {
    state = "level2off";
  } else if (keyCode === 32 && state === "level2off") {
    state = "level2on";
  }
}
