let ground = 500;
let state = "start";
let speed = 0;
const gravity = 1;
let characterX1 = 100; //initial coordinates
let characterY1 = 300;
let deathCount = 0;
let canJump = true;

//MODEL
const arrowUp_keycode = 38;
const arrowLeft_keycode = 37;
const arrowRight_keycode = 39;

const onLevelBackgroundRed = 237;
const onLevelBackgroundGreen = 215;
const onLevelBackgroundBlue = 245;

const offLevelBackgroundRed = 195;
const offLevelBackgroundGreen = 247;
const offLevelBackgroundBlue = 210;

const onLevelPlatformRed = 209;
const onLevelPlatformGreen = 133;
const onLevelPlatformBlue = 237;

const offLevelPlatformRed = 99;
const offLevelPlatformGreen = 235;
const offLevelPlatformBlue = 137;

const disabledPlatformColor = 56;

//defining objects containing the parameters of all the platforms (x,y,width,height) for Lvl 3
const platformOneLvl3 = {
  x: 100,
  y: 400,
  w: 250,
  h: 200,
};

const platformTwoLvl3 = {
  x: 350,
  y: 300,
  w: 200,
  h: 50,
};

const platformThreeLvl3 = {
  x: 600,
  y: 150,
  w: 150,
  h: 150,
};

const starLvl3 = {
  x: 750,
  y: 100,
  radius1: 10,
  radius2: 20,
  nPoints: 5,
};

function setupCanvas(r, g, b) {
  createCanvas(900, 600);
  background(r, g, b);
}

//defining objects containing the parameters of all the platforms (x,y,width,height) for Lvl 4

const platformOneLvl4 = {
  x: 150,
  y: 100,
  w: 600,
  h: 30,
};

const platformTwoLvl4 = {
  x: 150,
  y: 200,
  w: 600,
  h: 30,
};

const platformThreeLvl4 = {
  x: 150,
  y: 300,
  w: 600,
  h: 30,
};

const platformFourLvl4 = {
  x: 150,
  y: 400,
  w: 600,
  h: 30,
};

const platformFiveLvl4 = {
  x: 150,
  y: 500,
  w: 600,
  h: 30,
};

const starLvl4 = {
  x: 720,
  y: 470,
  radius1: 10,
  radius2: 20,
  nPoints: 5,
};

/////////////////////////////////////////////////////// Level 4 finished

//death count
function deathCounter() {
  fill(231, 231, 231);
  rect(50, 50, 100, 50);
  fill(0, 0, 255);
  textSize(20);
  textFont("Impact");
  text("Deaths: " + deathCount, 60, 65, 100, 50);
}

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

  deathCounter(); //this function is used for drawing
  // the death count on the screen

  fill(0, 0, 0);
  textSize(30);
  textFont("Helvetica");
  text("MOVEMENT", 360, 100, 300, 300);

  //instructions are not very intuitive...
  textSize(20);
  text(" < go left", 400, 150, 300, 300);

  text(" > go right", 400, 180, 300, 300);

  text(" ^ jump", 400, 210, 300, 300);

  //this should at least be aligned
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

  deathCounter();

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

  deathCounter();

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

  deathCounter();

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

//////////////////////////////////////////////////////////////////////start of the lvl 3
function level3on() {
  setupCanvas(
    onLevelBackgroundRed,
    onLevelBackgroundGreen,
    onLevelBackgroundBlue
  );

  deathCounter();

  //actually drawing the platforms
  noStroke();

  //platformOne
  fill(onLevelPlatformRed, onLevelPlatformGreen, onLevelPlatformBlue);
  rect(
    platformOneLvl3.x,
    platformOneLvl3.y,
    platformOneLvl3.w,
    platformOneLvl3.h
  );

  //platformThree
  rect(
    platformThreeLvl3.x,
    platformThreeLvl3.y,
    platformThreeLvl3.w,
    platformThreeLvl3.h
  );

  //platformTwo
  fill(disabledPlatformColor);
  rect(
    platformTwoLvl3.x,
    platformTwoLvl3.y,
    platformTwoLvl3.w,
    platformTwoLvl3.h
  );

  theFinalStar(
    starLvl3.x,
    starLvl3.y,
    starLvl3.radius1,
    starLvl3.radius2,
    starLvl3.nPoints
  );
}

function level3off() {
  setupCanvas(
    offLevelBackgroundRed,
    offLevelBackgroundGreen,
    offLevelBackgroundBlue
  );

  deathCounter();

  //actually drawing the platforms
  noStroke();

  //platformOne
  fill(disabledPlatformColor);
  rect(
    platformOneLvl3.x,
    platformOneLvl3.y,
    platformOneLvl3.w,
    platformOneLvl3.h
  );

  //platformThree
  rect(
    platformThreeLvl3.x,
    platformThreeLvl3.y,
    platformThreeLvl3.w,
    platformThreeLvl3.h
  );

  //platformTwo
  fill(offLevelPlatformRed, offLevelPlatformGreen, offLevelPlatformBlue);
  rect(
    platformTwoLvl3.x,
    platformTwoLvl3.y,
    platformTwoLvl3.w,
    platformTwoLvl3.h
  );

  theFinalStar(
    starLvl3.x,
    starLvl3.y,
    starLvl3.radius1,
    starLvl3.radius2,
    starLvl3.nPoints
  );
}

////////////////////////////////////////////////////////////////////// Level 4 function starts here
function level4on() {
  setupCanvas(
    onLevelBackgroundRed,
    onLevelBackgroundGreen,
    onLevelBackgroundBlue
  );

  deathCounter();

  //actually drawing the platforms
  noStroke();

  //platformOne
  fill(onLevelPlatformRed, onLevelPlatformGreen, onLevelPlatformBlue);
  rect(
    platformOneLvl4.x,
    platformOneLvl4.y,
    platformOneLvl4.w,
    platformOneLvl4.h
  );

  //platformThree
  rect(
    platformThreeLvl4.x,
    platformThreeLvl4.y,
    platformThreeLvl4.w,
    platformThreeLvl4.h
  );

  // platformFive

  rect(
    platformFiveLvl4.x,
    platformFiveLvl4.y,
    platformFiveLvl4.w,
    platformFiveLvl4.h
  );

  //platformTwo
  fill(disabledPlatformColor);
  rect(
    platformTwoLvl4.x,
    platformTwoLvl4.y,
    platformTwoLvl4.w,
    platformTwoLvl4.h
  );

  rect(
    platformFourLvl4.x,
    platformFourLvl4.y,
    platformFourLvl4.w,
    platformFourLvl4.h
  );

  theFinalStar(
    starLvl4.x,
    starLvl4.y,
    starLvl4.radius1,
    starLvl4.radius2,
    starLvl4.nPoints
  );
}

function level4off() {
  setupCanvas(
    offLevelBackgroundRed,
    offLevelBackgroundGreen,
    offLevelBackgroundBlue
  );

  deathCounter();

  //actually drawing the platforms
  noStroke();

  //platformOne
  fill(disabledPlatformColor);
  rect(
    platformOneLvl4.x,
    platformOneLvl4.y,
    platformOneLvl4.w,
    platformOneLvl4.h
  );

  //platformThree
  rect(
    platformThreeLvl4.x,
    platformThreeLvl4.y,
    platformThreeLvl4.w,
    platformThreeLvl4.h
  );

  // platformFive
  rect(
    platformFiveLvl4.x,
    platformFiveLvl4.y,
    platformFiveLvl4.w,
    platformFiveLvl4.h
  );

  //platformTwo and platformFour
  fill(offLevelPlatformRed, offLevelPlatformGreen, offLevelPlatformBlue);
  rect(
    platformTwoLvl4.x,
    platformTwoLvl4.y,
    platformTwoLvl4.w,
    platformTwoLvl4.h
  );

  rect(
    platformFourLvl4.x,
    platformFourLvl4.y,
    platformFourLvl4.w,
    platformFourLvl4.h
  );

  theFinalStar(
    starLvl4.x,
    starLvl4.y,
    starLvl4.radius1,
    starLvl4.radius2,
    starLvl4.nPoints
  );
}
////////////////////// END OF THE LEVEL 4

//////////////////////////////////////////////////////// don;t forget to put the source for the star
function theFinalStar(x, y, radius1, radius2, npoints) {
  fill(255, 255, 255);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0 + 55; a < TWO_PI + 55; a += angle) {
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
  if (keyIsDown(arrowUp_keycode) && canJump) {
    //jumping
    speed = -20;
    canJump = false;
  } else if (keyIsDown(arrowLeft_keycode)) {
    characterX1 = characterX1 - 6;
  } else if (keyIsDown(arrowRight_keycode)) {
    characterX1 = characterX1 + 6;
  }

  //gravity
  speed = speed + gravity;
  characterY1 = characterY1 + speed;

  //boundaries
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
    level1on(); //defining the canvas and platforms and stuff
    character(characterX1, characterY1); //drawing the character

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

    theFinalStar(850, 200, 10, 20, 5);

    //level complete
    if (characterX1 + 50 > 850 && characterY1 + 50 > 200) {
      state = "level3on";
      characterX1 = platformOneLvl3.x + 20;
      characterY1 = platformOneLvl3.y + 50;
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

  ////////////////////////////////////////////////////////////////////////////////////
  //level 333333333333
  else if (state === "level3on") {
    level3on(); //defining the canvas and platforms and stuff
    character(characterX1, characterY1); //drawing the character

    //level complete
    if (characterX1 + 50 > starLvl3.x && characterY1 + 50 > starLvl3.y) {
      state = "level4on";
      characterX1 = 170;
      characterY1 = 100;
      speed = 0;
    }

    //the character doesnt go below the platform level ON

    //platformOne
    if (
      characterX1 > platformOneLvl3.x - 50 &&
      characterX1 < platformOneLvl3.x + platformOneLvl3.w
    ) {
      if (characterY1 + 50 > platformOneLvl3.y) {
        characterY1 = platformOneLvl3.y - 50;
        canJump = true;
        speed = 0;
      }
    }
    //platformThree
    else if (
      characterX1 > platformThreeLvl3.x - 50 &&
      characterX1 < platformThreeLvl3.x + platformThreeLvl3.w
    ) {
      if (characterY1 + 50 > platformThreeLvl3.y) {
        characterY1 = platformThreeLvl3.y - 50;
        canJump = true;
        speed = 0;
      }
    }
    //the rest of the canvas (excepting platformOne and platformThree)
    else {
      if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = platformOneLvl3.x + 20;
        characterY1 = platformOneLvl3.y + 50;
        speed = 0;
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////
  else if (state === "level3off") {
    level3off(); //defining the canvas and platforms and stuff
    character(characterX1, characterY1); //drawing the character

    //the character doesnt go below the platform level ON

    //platformTwo
    if (
      characterX1 > platformTwoLvl3.x - 50 &&
      characterX1 < platformTwoLvl3.x + platformTwoLvl3.w
    ) {
      if (
        characterY1 + 50 > platformTwoLvl3.y &&
        characterY1 + 50 < platformTwoLvl3.y + 51
      ) {
        characterY1 = platformTwoLvl3.y - 50;
        canJump = true;
        speed = 0;
      }
    }
    //the rest of the canvas (excepting platformOne and platformThree)
    else {
      if (characterY1 > 550) {
        deathCount = deathCount + 1;
        characterX1 = platformOneLvl3.x + 20;
        characterY1 = platformOneLvl3.y - 50;
        speed = 0;
      }
    }
  }
  // Level 4444444 if states
  else if (state === "level4on") {
    level4on(); //defining the canvas and platforms and stuff
    character(characterX1, characterY1); //drawing the character

    //level complete
    if (characterY1 + 50 > starLvl4.x && characterY1 + 50 > starLvl4.y) {
      state = "level5on";
      characterX1 = 100;
      characterY1 = 300; //depending where I want to put the character in lvl 5
      speed = 0;
    }

    //the character doesnt go below the platform level ON

    //platformOne
    if (
      characterX1 > platformOneLvl4.x - 50 &&
      characterX1 < platformOneLvl4.x + platformOneLvl4.w
    ) {
      if (
        characterY1 + 50 > platformOneLvl4.y &&
        characterY1 < platformOneLvl4.y + platformOneLvl4.h
      ) {
        characterY1 = platformOneLvl4.y - 50;
        canJump = true;
        speed = 0;
      }
    }
    //platformThree
    if (
      characterX1 > platformThreeLvl4.x - 50 &&
      characterX1 < platformThreeLvl4.x + platformThreeLvl4.w
    ) {
      if (
        characterY1 + 50 > platformThreeLvl4.y &&
        characterY1 < platformThreeLvl4.y + platformThreeLvl4.h
      ) {
        characterY1 = platformThreeLvl4.y - 50;
        canJump = true;
        speed = 0;
      }
    }

    // platoformFive
    if (
      characterX1 > platformFiveLvl4.x - 50 &&
      characterX1 < platformFiveLvl4.x + platformFiveLvl4.w
    ) {
      if (
        characterY1 + 50 > platformFiveLvl4.y &&
        characterY1 < platformFiveLvl4.y + platformFiveLvl4.h
      ) {
        characterY1 = platformFiveLvl4.y - 50;
        canJump = true;
        speed = 0;
      }
    }
    //the rest of the canvas (excepting platformOne and platformThree)

    if (characterY1 > 550) {
      deathCount = deathCount + 1;
      characterX1 = platformOneLvl4.x + 20;
      characterY1 = platformOneLvl4.y - 50;
      speed = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////
  else if (state === "level4off") {
    level4off(); //defining the canvas and platforms and stuff
    character(characterX1, characterY1); //drawing the character

    //the character doesnt go below the platform level ON

    //platformTwo
    if (
      characterX1 > platformTwoLvl4.x - 50 &&
      characterX1 < platformTwoLvl4.x + platformTwoLvl4.w
    ) {
      if (
        characterY1 + 50 > platformTwoLvl4.y &&
        characterY1 + 50 < platformTwoLvl4.y + platformTwoLvl4.h
      ) {
        characterY1 = platformTwoLvl4.y - 50;
        canJump = true;
        speed = 0;
      }
    }

    // platformFour
    if (
      characterX1 > platformFourLvl4.x - 50 &&
      characterX1 < platformFourLvl4.x + platformFourLvl4.w
    ) {
      if (
        characterY1 + 50 > platformFourLvl4.y &&
        characterY1 + 50 < platformFourLvl4.y + platformFourLvl4.h
      ) {
        characterY1 = platformFourLvl4.y - 50;
        canJump = true;
        speed = 0;
      }
    }

    //the rest of the canvas (excepting platformOne and platformThree)

    if (characterY1 > 550) {
      deathCount = deathCount + 1;
      characterX1 = platformOneLvl4.x + 20;
      characterY1 = platformOneLvl4.y - 50;
      speed = 0;
      state = "level4on";
    }
  }

  //////////////////////////////////// if states for level 4
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
  } else if (keyCode === 32 && state === "level3off") {
    state = "level3on";
  } else if (keyCode === 32 && state === "level3on") {
    state = "level3off";
  } else if (keyCode === 32 && state === "level4off") {
    state = "level4on";
  } else if (keyCode === 32 && state === "level4on") {
    state = "level4off";
  }
}
