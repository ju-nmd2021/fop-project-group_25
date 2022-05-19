let x = 0;
let y = 0;
let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100;
let characterY1 = 450;
let deathCount = 0;
let canJump = true;
let r = 0.0;

//platforms level 11111
let platforms1on = [{ xPosition: 0, yPosition: 500, width: 400, height: 100 }];

let platforms1off = [
  { xPosition: 600, yPosition: 500, width: 300, height: 100 },
];

//platforms level 22222
let platforms2on = [
  { xPosition: 0, yPosition: 500, width: 200, height: 100 },
  { xPosition: 600, yPosition: 300, width: 200, height: 300 },
];

let platforms2off = [
  { xPosition: 300, yPosition: 400, width: 200, height: 200 },
];

//platforms level 44444
let platforms4on = [
  { xPosition: 0, yPosition: 200, width: 100, height: 400 },

  { xPosition: 400, yPosition: 400, width: 100, height: 300 },

  { xPosition: 800, yPosition: 400, width: 100, height: 300 },
];

let platforms4off = [
  { xPosition: 200, yPosition: 300, width: 100, height: 300 },

  { xPosition: 600, yPosition: 500, width: 100, height: 300 },
];

//platforms level 55555
let platforms5on = [
  { xPosition: 0, yPosition: 500, width: 300, height: 100 },

  { xPosition: 300, yPosition: 300, width: 300, height: 300 },

  { xPosition: 600, yPosition: 100, width: 300, height: 500 },
];

let platforms5off = [
  { xPosition: 200, yPosition: 400, width: 100, height: 100 },

  { xPosition: 500, yPosition: 200, width: 100, height: 100 },
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
  theFinalStar(x + 0, y + 0, 10, 20, 5, 850, 470);
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
  theFinalStar(0, 0, 10, 20, 5, 850, 470);
}

//level2
//level2
//level2

function level2on() {
  fill(240, 201, 175);
  rect(0, 0, 900, 600);

  death();

  let level2On = platforms2on;
  for (let i = 0; i < level2On.length; i++) {
    fill(241, 158, 104);
    rect(
      level2On[i].xPosition,
      level2On[i].yPosition,
      level2On[i].width,
      level2On[i].height
    );
  }
  let level2Off = platforms2off;
  for (let i = 0; i < level2Off.length; i++) {
    fill(255, 255, 255);
    rect(
      level2Off[i].xPosition,
      level2Off[i].yPosition,
      level2Off[i].width,
      level2Off[i].height
    );
  }
  theFinalStar(x + 0, y + 0, 10, 20, 5, 850, 100);
}

function level2off() {
  fill(165, 194, 237);
  rect(0, 0, 900, 600);

  death();

  let level2On = platforms2on;
  for (let i = 0; i < level2On.length; i++) {
    fill(255, 255, 255);
    rect(
      level2On[i].xPosition,
      level2On[i].yPosition,
      level2On[i].width,
      level2On[i].height
    );
  }
  let level2Off = platforms2off;
  for (let i = 0; i < level2Off.length; i++) {
    fill(109, 160, 234);
    rect(
      level2Off[i].xPosition,
      level2Off[i].yPosition,
      level2Off[i].width,
      level2Off[i].height
    );
  }

  theFinalStar(x + 0, y + 0, 10, 20, 5, 850, 100);
}

//level4
//level4
//level4

function level4on() {
  fill(241, 179, 185);
  rect(0, 0, 900, 600);

  death();

  let level4On = platforms4on;
  for (let i = 0; i < level4On.length; i++) {
    fill(240, 111, 124);
    rect(
      level4On[i].xPosition,
      level4On[i].yPosition,
      level4On[i].width,
      level4On[i].height
    );
  }
  let level4Off = platforms4off;
  for (let i = 0; i < level4Off.length; i++) {
    fill(255, 255, 255);
    rect(
      level4Off[i].xPosition,
      level4Off[i].yPosition,
      level4Off[i].width,
      level4Off[i].height
    );
  }
  theFinalStar(x + 0, y + 0, 10, 20, 5, 850, 200);
}

function level4off() {
  fill(241, 235, 179);
  rect(0, 0, 900, 600);

  death();

  let level4On = platforms4on;
  for (let i = 0; i < level4On.length; i++) {
    fill(255, 255, 255);
    rect(
      level4On[i].xPosition,
      level4On[i].yPosition,
      level4On[i].width,
      level4On[i].height
    );
  }
  let level4Off = platforms4off;
  for (let i = 0; i < level4Off.length; i++) {
    fill(240, 227, 111);
    rect(
      level4Off[i].xPosition,
      level4Off[i].yPosition,
      level4Off[i].width,
      level4Off[i].height
    );
  }
  theFinalStar(x + 0, y + 0, 10, 20, 5, 850, 200);
}

//level 5
//level 5
//level 5

function level5on() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  let level5On = platforms5on;
  for (let i = 0; i < level5On.length; i++) {
    fill(209, 133, 237);
    rect(
      level5On[i].xPosition,
      level5On[i].yPosition,
      level5On[i].width,
      level5On[i].height
    );
  }
  let level5Off = platforms5off;
  for (let i = 0; i < level5Off.length; i++) {
    fill(255, 255, 255);
    rect(
      level5Off[i].xPosition,
      level5Off[i].yPosition,
      level5Off[i].width,
      level5Off[i].height
    );
  }
  theFinalStar(850, 50, 10, 20, 5);
}

function level5off() {
  fill(237, 215, 245);
  rect(0, 0, 900, 600);

  death();

  let level5On = platforms5on;
  for (let i = 0; i < level5On.length; i++) {
    fill(255, 255, 255);
    rect(
      level5On[i].xPosition,
      level5On[i].yPosition,
      level5On[i].width,
      level5On[i].height
    );
  }
  let level5Off = platforms5off;
  for (let i = 0; i < level5Off.length; i++) {
    fill(99, 235, 137);
    rect(
      level5Off[i].xPosition,
      level5Off[i].yPosition,
      level5Off[i].width,
      level5Off[i].height
    );
  }
  theFinalStar(850, 50, 10, 20, 5);
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

//death count
function death() {
  fill(231, 231, 231);
  rect(50, 50, 100, 50);
  fill(0, 0, 0);
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
  } else if (keyIsDown(37)) {
    characterX1 = characterX1 - 6;
  } else if (keyIsDown(39)) {
    characterX1 = characterX1 + 6;
  }

  //star
  r = r + 0.1;

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
      else if (characterY1 > 550) {
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

    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 50 && characterY1 < 220) {
      state = "level4on";
      characterX1 = 50;
      characterY1 = 0;
      speed = 0;
    }

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
      else if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 100;
        characterY1 = 300;
        speed = 0;
      }
    }
  } else if (state === "level2off") {
    level2off(0, 0);
    character(characterX1, characterY1);
    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 150 && characterY1 < 220) {
      state = "level4on";
      characterX1 = 50;
      characterY1 = 0;
      speed = 0;
    }

    //the character doesnt go below the platform level OFF
    if (state === "level2off" && characterY1 + 50 >= ground - 100) {
      if (characterX1 > 250 && characterX1 <= 500) {
        characterY1 = ground - 150;
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
  } //level 44444444
  else if (state === "level4on") {
    level4on(0, 0);
    character(characterX1, characterY1);

    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 150 && characterY1 < 220) {
      state = "level5on";
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }

    //the character doesnt go below the platform level ON
    if (state === "level4on") {
      if (
        characterX1 >= 0 &&
        characterX1 < 100 &&
        characterY1 + 350 >= ground
      ) {
        characterY1 = ground - 350;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 350 &&
        characterX1 < 500 &&
        characterY1 + 150 >= ground
      ) {
        characterY1 = ground - 150;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 750 &&
        characterX1 < 860 &&
        characterY1 + 150 >= ground
      ) {
        characterY1 = ground - 150;
        speed = 0;
        canJump = true;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 30;
        characterY1 = 0;
        speed = 0;
      }
    }
  } else if (state === "level4off") {
    level4off(0, 0);

    character(characterX1, characterY1);

    //level complete
    if (characterX1 + 50 > 830 && characterY1 > 150 && characterY1 < 220) {
      state = "level5on";
      characterX1 = 100;
      characterY1 = 300;
      speed = 0;
    }

    //the character doesnt go below the platform level OFF
    if (state === "level4off") {
      if (
        characterX1 > 150 &&
        characterX1 <= 300 &&
        characterY1 + 250 >= ground
      ) {
        characterY1 = ground - 250;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 550 &&
        characterX1 <= 700 &&
        characterY1 + 50 >= ground
      ) {
        characterY1 = ground - 50;
        speed = 0;
        canJump = true;
      }
      //death count in case of falling and restart of the character to the start position
      else if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = 30;
        characterY1 = 0;
        speed = 0;
      }
    }
  }
  /////level55555
  else if (state === "level5on") {
    level5on(0, 0);
    character(characterX1, characterY1);

    //level complete
    // if (characterX1 + 50 > 830 && characterY1 > 150 && characterY1 < 220) {
    //   state = "level6on";
    //   characterX1 = 100;
    //   characterY1 = 300;
    //   speed = 0;
    // }

    //the character doesnt go below the platform level OFF
    if (state === "level5on") {
      //platform
      if (characterX1 > 0 && characterX1 <= 250 && characterY1 + 50 >= ground) {
        characterY1 = ground - 50;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 250 &&
        characterX1 <= 550 &&
        characterY1 + 250 >= ground
      ) {
        characterY1 = ground - 250;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 550 &&
        characterX1 <= 900 &&
        characterY1 + 450 >= ground
      ) {
        characterY1 = ground - 450;
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
  } else if (state === "level5off") {
    level5off(0, 0);
    character(characterX1, characterY1);

    //level complete
    // if (characterX1 + 50 > 830 && characterY1 > 150 && characterY1 < 220) {
    //   state = "level6on";
    //   characterX1 = 100;
    //   characterY1 = 300;
    //   speed = 0;
    // }

    //the character doesnt go below the platform level OFF
    if (state === "level5off") {
      if (
        characterX1 > 150 &&
        characterX1 <= 300 &&
        characterY1 + 150 >= ground
      ) {
        characterY1 = ground - 150;
        speed = 0;
        canJump = true;
      }
      if (
        characterX1 > 450 &&
        characterX1 <= 600 &&
        characterY1 + 350 >= ground
      ) {
        characterY1 = ground - 350;
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
