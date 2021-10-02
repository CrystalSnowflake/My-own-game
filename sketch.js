//the variables where the images will be uploaded
var photoImage, lampImage, livingRoomImage, MC, hallwayImage, playRoomImage, babyCameraImage, ballsyNormal;
var ballsyScary, blocksImage, booksImage, bookShelfImage, laptopImage, catterpillarImage, chestImage, curtainImage, zenImage;
var keyImage, letterImage, prescriptionImage, sideTableImage, sideTable2, spiderImage, PaperImage;
//variables storing the above
var sideTable, family, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, sprite10, sprite11, sprite12, sleepingBag, sleep;
var backGround, lamp, photo, lamp1, lamp2, lamp3, hallway, sprite, ballsy, chase;
//walls for the chase
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var wall18, wall19, wall20, wall21, wall22, wall23;

var z = 100;
var x = 400;
gameState = 'livingRoom'; //gamestate


function preload(){
  //backgrounds
  livingRoomImage = loadImage("images/background/livingRoom.jpg");
  hallwayImage = loadImage("images/background/hallway.jpg");
  playRoomImage = loadImage("images/background/playRoom.png");
  //the house
  catterpillarImage = loadImage("images/catterpillar.png");
  spiderImage = loadImage("images/spider.png");
  //living room
  photoImage = loadImage("images/family_photo.png");
  lampImage = loadImage("images/lamp.png"); //also to be put in master bedroom
  sideTableImage = loadImage("images/sideTableWithBooks.png");
  shine = loadImage("images/shine.png");
  sleepingBag = loadImage("images/sleepingBag.png");
  //guest bedroom
  //office
  laptopImage = loadImage("images/brokenLaptop.png");
  bookShelfImage =loadImage("images/bookshelf.png");
  letterImage = loadImage("images/letter.png");
  prescriptionImage = loadImage("images/prescription.png");
  paperImage = loadImage("images/tornPileOfPaperWork.png");
  //playroom
  ballsyNormal = loadImage("images/ballsy(Normal).png");
  ballsyScary = loadImage("images/ballsy(Scary).png");
  blocksImage = loadImage("images/blocks.png");
  booksImage = loadImage("images/books.png");
  curtainImage = loadImage("images/curtain.png");
  chestImage = loadImage("images/chest.png");
  babyCameraImage = loadImage("images/babyCamera.png");
  chase = loadImage("images/background/maze(playroom).jpg");
  //master bedroom
  zenImage = loadImage("images/inscenseSticks.png");
  keyImage = loadImage("images/keyToMCBedroom.png");
  //MC's bedroom
  
}

function setup(){
  createCanvas(1250, 560)

  //creating the living room
  backGround = createSprite(630, 280);
  backGround.addImage(livingRoomImage);
  backGround.scale = 0.65;

  //creating the main character MC
  MC = createSprite(100, 199, 20, 20);
  //1250/2.1, 560/1.07
  MC.shapeColor = "white";

  //invisible sprites
   //hallway
  sprite = createSprite(40, 200, 50, 70);
  sprite.visible = false;
   //office - top right
  sprite1 = createSprite(1010, 165, z, z);
  sprite1.visible = false;
   //playroom - top left
  sprite2 = createSprite(240, 145, z, z);
  sprite2.visible = false;
   //guest bedroom - bottom left
  sprite3 = createSprite(350, 465, z, z);
  sprite3.visible = false;
   //locked door - bottom right
  sprite4 = createSprite(910, 465, z, z);
  sprite4.visible = false;
   //kitchen
  sprite5 = createSprite(1222, 262,70, 50)
  sprite5.visible = false;
   //hallway
  sprite6 = createSprite(1250, 320, 10, 170);
  sprite6.visible = false;
  // the boundaries in hallway
   //above
   //middle
  sprite7 = createSprite(630, 235, 650, 10);
  sprite7.visible = false;
  //right
  sprite8 = createSprite(1183, 235, 200, 10);
  sprite8.visible = false;
  //left
  sprite9 = createSprite(90, 235, 170, 10);
  sprite9.visible = false;
   //below
   //middle
  sprite10 = createSprite(640, 410, 450, 10);
  sprite10.visible = false;
   //right
  sprite11 = createSprite(1183, 410, 450, 10);
  sprite11.visible = false;
   //left
  sprite12 = createSprite(90, 410, 380, 10);
  sprite12.visible = false;
  //playroom to hallway
  sprite13 = createSprite(1250, 490, 10, 140);
  sprite13.visible = false;
  //boundaries in playroom
   //top
  sprite14 = createSprite(710, 420, 1080, 10);
  sprite14.visible = false;

  //the lamps
   //top-left
  lamp = createSprite(100, 50, 10, 10);
  lamp.addImage(lampImage);
  lamp.scale = 0.1;
   //top-right
  lamp1 = createSprite(1155, 50, 10, 10);
  lamp1.addImage(lampImage);
  lamp1.scale = 0.1;
   //bottom-right
  lamp2 = createSprite(1155, 465, 10, 10);
  lamp2.addImage(lampImage);
  lamp2.scale = 0.1;
   //bottom-left
  lamp3 = createSprite(100, 465, 10, 10);
  lamp3.addImage(lampImage);
  lamp3.scale = 0.1;

  //sidetable for living room
  //left
  sideTable = createSprite(880, 485, 10, 10);
  sideTable.addImage(sideTableImage);
  sideTable.scale = 0.25;
   //right
  sideTable2 = createSprite(380, 485, 10, 10);
  sideTable2.addImage(sideTableImage);
  sideTable2.scale = 0.25;

  //family photo
  photo = createSprite(1000, 460, 10, 10);
  photo.addImage(shine)
  photo.scale = 0.2;
  family = createSprite(950, 200, 10, 10);
  family.shapeColor = rgb(81, 1, 10);
  family.setCollider('rectangle', 0, 0, 25, 25)   

  //sleeping bag
  sleep = createSprite(280, 175, 10, 10);
  sleep.addImage(sleepingBag);
  sleep.scale = 2;
  
  //ballsy normal
  ballsy = createSprite(190, 431, 10, 10);
  ballsy.addImage(ballsyNormal)
  ballsy.scale = 0.25;

  //walls for the chase
  fill('white')
  wall1 = createSprite(180, 495, 5, 50); // start right
  wall2 = createSprite(110, 530, 5, 100); // start left
  wall3 = createSprite(202.5, 520, 50, 5); // below start right
  wall4 = createSprite(240, 495, 80, 5); // above (below start right)
  wall5 = createSprite(290, 520, 50, 5); // to the right of (below start right)
  wall6 = createSprite(316, 497.5, 5, 50); // perpendicular to the above
  wall7 = createSprite(390, 475, 100, 5); // to the right of above
  wall8 = createSprite(520, 475, 100, 5); //to the right of above
  wall9 = createSprite(430, 530, 100, 5); //below the above
  wall10 = createSprite(500, 530, 5, 50); // to the right of above
  wall11 = createSprite(600, 530, 5, 50); // to the right of above
  wall12  = createSprite(550, 530, 50, 5); // to the left of above
  wall13 = createSprite(570, 465, 5, 50); // above the above
  wall14 = createSprite(630, 450, 50, 5); //to the right of above
  wall15 = createSprite(740, 450, 150, 5); //to the right of above
  wall16 = createSprite(900, 450, 100, 5);//to the right of above
  wall17 = createSprite();
  wall18 = createSprite(); 
}

function draw(){
  background(255)

  //controls of the MC
  if(keyDown("UP") || keyDown('w')){
    MC.x = MC.x + 0;
    MC.y = MC.y - 3;
  } else if(keyDown("DOWN") || keyDown('s')){
    MC.x = MC.x + 0;
    MC.y = MC.y + 3;
  } else if(keyDown("RIGHT") || keyDown('d')){
    MC.x = MC.x + 3;
    MC.y = MC.y + 0;
  } else if(keyDown("LEFT") || keyDown('a')){
    MC.x = MC.x - 3;
    MC.y = MC.y + 0;
  }
  

  if(gameState === 'livingRoom'){

    //visibility of objects
    lamp.visible = true;
    lamp1.visible = true;
    lamp2.visible = true;
    lamp3.visible = true;
    sideTable.visible = true;
    sideTable2.visible = true;
    sleep.visible = true;
    photo.visible = true;
    family.visible = true;
    ballsy.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;

    //set colliders for sprites
     //lamp
    lamp.setCollider('circle', 0, 0, 500);
    lamp1.setCollider('circle', 0, 0, 500);
    lamp2.setCollider('circle', 0, 0, 500);
    lamp3.setCollider('circle', 0, 0, 500);
     //side tables
    sideTable.setCollider('rectangle', 0, -100, x + 150, x);
    sideTable2.setCollider('rectangle', 0, -100, x + 150, x);

    //MC going to the hallway
   if(MC.isTouching(sprite)){
     backGround.addImage(hallwayImage)
     MC.x = 1226;
     MC.y = 260;
     gameState = 'hallway';
  }


  }

  //MC in the hallway
  if(gameState === 'hallway'){
    //visibility of objects
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
 
    //hallway boundaries
    MC.collide(sprite7);
    MC.collide(sprite8);
    MC.collide(sprite9);
    MC.collide(sprite10);
    MC.collide(sprite11);
    MC.collide(sprite12);

    //MC is going to the living room
    if(MC.isTouching(sprite6)){
      backGround.addImage(livingRoomImage);
      MC.x = 105;
       MC.y = 200;
      gameState = 'livingRoom';
    }

    //MC going to the playroom
  if(MC.isTouching(sprite2)){
    backGround.addImage(playRoomImage)
    MC.x = 1206;
    MC.y = 479;
    gameState = 'playroom'
  }
}

//MC in the playroom
  if(gameState === 'playroom'){
    backGround.addImage(playRoomImage)

    //visibility of objects
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;
    ballsy.visible = true;

    MC.collide(sprite14)

    // playroom to hallway
    if(MC.isTouching(sprite13)){
       backGround.addImage(hallwayImage)
       MC.x = 243;
       MC.y = 251;
       gameState = 'hallway'
     }
  }

  if(gameState === 'maze'){

    //visibility of objects
    lamp.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    sideTable.visible = false;
    sideTable2.visible = false;
    sleep.visible = false;
    photo.visible = false;
    family.visible = false;

    //images changing
    backGround.addImage(chase)
    ballsy.addImage(ballsyScary)
    ballsy.scale = 0.1;

  }


  drawSprites();


  textSize(20);
  fill('white')
  text("Coordinates: " + mouseX + ', ' + mouseY, 500, 540);


  //all the text in the game will be below drawSprites so it is over all the sprites. Hence I am writing the text for all gamestates here.
  if(gameState === 'livingRoom'){

     //interacting with the lamp
     if(MC.isTouching(lamp) && keyDown('space')){
       fill(rgb(244, 223, 246))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Times New Roman")
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and hand-made designs...", 10, 440);
       text("I remember when we first moved into the house, mother put so much love and effort... these were her favourite lamps", 10, 470);
    }
     if(MC.isTouching(lamp1) && keyDown('space')){
       fill(rgb(244, 223, 246))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Times New Roman")
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and hand-made designs...", 10, 440);
       text("I remember when we first moved into the house, mother put so much love and effort... these were her favourite lamps", 10, 470);
    }
     if(MC.isTouching(lamp2) && keyDown('space')){
       fill(rgb(244, 223, 246))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Times New Roman")
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and hand-made designs...", 10, 440);
       text("I remember when we first moved into the house, mother put so much love and effort... these were her favourite lamps", 10, 470);
    }
     if(MC.isTouching(lamp3) && keyDown('space')){
       fill(rgb(244, 223, 246))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Times New Roman")
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("When we were poor, mother always dreamed of owning objects with intricate and hand-made designs...", 10, 440);
       text("I remember when we first moved into the house, mother put so much love and effort... these were her favourite lamps", 10, 470);
    }

    //side tables
    if(MC.isTouching(sideTable) && keyDown('space')){
      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("A lot of books were kept here for the guests to see. They had gotten so caught up in our image to others...", 10, 440);
      text("Me and my sister had to read all the books and tell the guests what we read. I don't really think anyone cared about that", 10, 460);
    }
    if(MC.isTouching(sideTable2) && keyDown('space')){
      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("A lot of books were kept here for the guests to see. They had gotten so caught up in our image to others...", 10, 440);
      text("Me and my sister had to read all the books and tell the guests what we read. I don't really think anyone cared about that", 10, 460);
    }

    //family photo
    if(MC.isTouching(photo) && keyDown('space')){

      family.scale = 0.5;
      family.setCollider('rectangle', 0, 0, 500, 900);
      family.debug = true;

      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("...us. I miss you sister to this day...", 10, 440);
      
    } if(MC.isTouching(family)){
      family.visible = false;
    }
  
    //kitchen
    if(MC.isTouching(sprite5) && keyDown('space')){

      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("The kitchen... where it all happened... do I hear them screaming inside??... no its been years. Get yourself together MC!", 10, 440);
    }

    //sleeping bag
    if(MC.isTouching(sleep) && keyDown('space')){
      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("I came here last night. This is my sleeping bag. I rested here for the night. It wasn't as comfortable as my apartment", 10, 440);
      text("but it made do", 10, 470);
    }
  }

  if(gameState === 'playroom'){

    //ballsy before the maze
    if(MC.isTouching(ballsy) && keyDown('space')){
       fill(rgb(244, 223, 246))
       rect(0, 400, 1250, 250);
       textSize(25);
       textFont("Times New Roman")
       fill(rgb(173, 83, 181));
       stroke("white");
       strokeWeight(3.5)
       text("Our ball from when we were poor... Mother told us to keep ballsy so we would remember", 10, 440);
       text("our origin, where we came from. I did not like it. It would come to life and chase me.", 10, 470);
       text("I would get so scared. It said horrible things to me. But my Crystal would always assure me otherwise... *", 10, 500);
    }

    //ballsy to scary ballsy
    if(MC.isTouching(ballsy) && keyDown('1')){
      fill(rgb(205, 205, 205))
      rect(0, 400, 1250, 250);
      textSize(25);
      textFont("Times New Roman")
      fill(rgb(255, 105, 180));
      stroke("white");
      strokeWeight(2)
      text("...I don't really think it was real tho-- *", 10, 440);
    } else if(keyWentUp('1')){
        gameState = "maze"
        MC.x = 165;
        MC.y = 490;
      }
  }

  
}