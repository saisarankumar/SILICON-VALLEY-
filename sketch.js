var ninja, ninjaImg;
var thanosLaser, thanosLaserImg;
var fireState = "NO";
var health = 2;
var score = 0;
var is1state = 0;
var is2state = 0;
var is3state = 0;
var is4state = 0;
var is5state = 0;
var is6state = 0;
var gameState = "SERVE";
var minScore = 6;
var scoreIncrement = 6;

function preload(){
  avenger1Img = loadAnimation("images/11.png","images/12.png","images/13.png","images/14.png","images/15.png");
  ninjaImg = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
  ninjaFightingImg = loadAnimation("images/sh1.png","images/sh2.png","images/sh3.png","images/sh4.png","images/sh5.png","images/sh6.png");
  ninjaShootingImg = loadAnimation("images/sh2.png","images/sh3.png","images/sh4.png","images/sh5.png","images/sh6.png");
  ninjaJumpingImg = loadAnimation("images/sh4.png","images/sh4.png");
  bgImg = loadImage("images/Untitled.png");
  bgImg1 = loadImage("images/Untitled1.png");
  bgImg2 = loadImage("images/Untitled2.png");
  bgImg3 = loadImage("images/Untitled3.png");
  bgImg4 = loadImage("images/Untitled4.png");
  bgImg5 = loadImage("images/Untitled5.png");
  bgImg6 = loadImage("images/Untitled.png");
  soldierImg = loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png","images/s7.png","images/s8.png","images/s9.png","images/s10.png","images/s11.png");
  airplaneImg = loadImage("images/airplane.png");
  missileImg = loadImage("images/missile.png"); 
  fireImg = loadImage("images/fire.png");
  dinoImg = loadAnimation("images/dino1.png","images/dino2.png","images/dino3.png","images/dino4.png","images/dino5.png","images/dino6.png")
  dinoImg1 = loadAnimation("images/dino1.png","images/dino1.png");
  bulletImg = loadImage("images/b.png");
  i1Img = loadImage("images/i1.png");
  i2Img = loadImage("images/i2.png");
  i3Img = loadImage("images/i3.png");
  i4Img = loadImage("images/i4.png");
  i5Img = loadImage("images/i5.png");
  i6Img = loadImage("images/i6.png");
  thanosImg = loadImage("images/thanos.png");
  laserImg = loadImage("images/laser.png");
  ninjaStopImg = loadAnimation("images/sh7.png","images/sh7.png");
  ndImg = loadImage("images/nd.png");
  gameoverImg = loadImage("images/gameover.png");
  winImg = loadImage("images/youwin.png");
  sound1 = loadSound("bullet.mp3");
  stoneGrabSound = loadSound("StoneGrab.mp3");
  laserShootSound = loadSound("LaserShoot.wav");
  bgMusic = loadSound("BGMusic.mp3");
  thanosLaserImg = loadImage("images/thanoslaser.png");
  //friend1 = loadAnimation("Run_000.png","Run_001.png","Run_002.png","Run_003.png","Run_004.png","Run_005.png","Run_006.png","Run_007.png","Run_008.png",);
  //friend2 = loadAnimation("11.png","12.png","13.png","14.png","15.png");
  //friend3 = loadAnimation();
}

function setup() {

  createCanvas(1500, 400);

  createBackground();
  createNinja();
  createGround();
  createDeadNinja();
  createGameOver();
  createYouWin();
  createInfinityst1();
  createInfinityst2();
  createInfinityst3();
  createInfinityst4();
  createInfinityst5();
  createInfinityst6();
  createThanos();
  createLaser();

  dinoGroup = new Group;
  fireGroup = new Group;
  soldierGroup = new Group;
  airplaneGroup = new Group;
  missileGroup = new Group;
  bulletGroup = new Group;
  i1Group = new Group;
  i2Group = new Group;
  i3Group = new Group;
  i4Group = new Group;
  i5Group = new Group;
  i6Group = new Group;
}

function draw() {
  background(0,0,0);
  ninja.collide(ground);

  if(gameState === "SERVE"){
    fill("gold");
    textSize(24);
    text("CONTROLS FOR THE GAME", 100, 100);
    text("press space button to jump", 100, 130);
    text("press 's' to fire", 100, 160);
    text("collect the stones", 100, 190);
    text("press 'u' to shoot laser to kill thanos", 100, 220);
    text("press 'c' to start", 100, 250);
    
    fill("lightgreen");
    textSize(24);
    text("NINJA VS THANOS", 700, 30);

    if(keyDown("c")){
      gameState = "PLAY";
      bgMusic.play();
    }
  }

  if(gameState === "PLAY"){

    if(bg.x < 0){
      bg.x = bg.width/2;
    }  

    if(score >= minScore && score <= (minScore+scoreIncrement-1)){
      if(is1state === 0){
        is1state = 1;
        is1.visible=true;
        is1.velocityX = -10;
      }
      bg.addImage(bgImg1);
    }else if(score >= (minScore+scoreIncrement) && score <=(minScore+2*scoreIncrement-1)){
      if(is2state === 0){
        is2state = 1;
        is2.visible=true;
        is2.velocityX = -10;
      }
      bg.addImage(bgImg2);
    }else if(score >= (minScore+2*scoreIncrement) && score <=(minScore+3*scoreIncrement-1)){
      if(is3state === 0){
        is3state = 1;
        is3.visible=true;
        is3.velocityX = -10;
      }
      bg.addImage(bgImg3);
    }else if(score >= (minScore+3*scoreIncrement) && score <=(minScore+4*scoreIncrement-1)){
      if(is4state === 0){
        is4state = 1;
        is4.visible=true;
        is4.velocityX = -10;
      }
      bg.addImage(bgImg4);
    }else if(score >= (minScore+4*scoreIncrement) && score <=(minScore+5*scoreIncrement-1)){
      if(is5state === 0){
        is5state = 1;
        is5.visible=true;
        is5.velocityX = -10;
      }
      bg.addImage(bgImg5);
    }else if(score >= (minScore+5*scoreIncrement)){
      if(is6state === 0){
        is6state = 1;
        is6.visible=true;
        is6.velocityX = -10;
      }
 
      
    }

    if(is1state === 1 && is1.x < 100){
      is1.velocityX = 0;
      is1.x = 1340;
      is1.y = 80;
      is1.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is2state === 1 && is2.x < 100){
      is2.velocityX = 0;
      is2.x = 1370;
      is2.y = 80;
      is2.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is3state === 1 && is3.x < 100){
      is3.velocityX = 0;
      is3.x = 1400;
      is3.y = 80;
      is3.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is4state === 1 && is4.x < 100){
      is4.velocityX = 0;
      is4.x = 1430;
      is4.y = 80;
      is4.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is5state === 1 && is5.x < 100){
      is5.velocityX = 0;
      is5.x = 1460;
      is5.y = 80;
      is5.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is6state === 1 && is6.x < 100){
      is6.velocityX = 0;
      is6.x = 1490;
      is6.y = 80;
      is6.scale = 0.4;
      stoneGrabSound.play();
      gameState = "THANOS";
    }

    if(keyDown("space") && ninja.y >= 200){
      ninja.velocityY = -16;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.8;
    }

    if(keyWentUp("space")){
      ninja.changeAnimation("running", ninjaImg);
      ninja.scale = 0.5;
    }

    ninja.velocityY = ninja.velocityY + 0.8;

    
    if (keyDown("s") && fireState==="NO") {
      
      fireState="YES";
      ninja.changeAnimation("shooting", ninjaShootingImg);
      ninja.scale = 0.7;
      ninja.pause();
      ninja.setFrame(0);
      ninja.nextFrame();
      ninja.nextFrame();
      ninja.nextFrame();
      ninja.nextFrame();
      fire1();
    
    }

    for(var i=0;i<dinoGroup.length;i++){
      if(fireGroup.isTouching(dinoGroup.get(i))){
        fireGroup.destroyEach();
        dinoGroup.get(i).remove();
        score = score + 1;
      }  
    }
    
    for(var i=0;i<airplaneGroup.length;i++){
      if(fireGroup.isTouching(airplaneGroup.get(i))){
        fireGroup.destroyEach();
        airplaneGroup.get(i).remove();
        missileGroup.get(i).remove();
        score = score + 2;
      }
    }
      
    for(i=0;i<soldierGroup.length;i++){
      if(fireGroup.isTouching(soldierGroup.get(i))){
        fireGroup.destroyEach();
        soldierGroup.get(i).remove();
        bulletGroup.get(i).remove();
        score = score + 3;
      }  
    }
    
    if(ninja.isTouching(dinoGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      gameState = "END";
    }

    if(ninja.isTouching(airplaneGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      gameState = "END";
    }

    if(ninja.isTouching(missileGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      gameState = "END";
    }

    if(ninja.isTouching(bulletGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      gameState = "END";
    }

    if(ninja.isTouching(soldierGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      gameState = "END";
    }

      
  if (keyWentUp("s")){
    fireState="NO";
    ninja.changeAnimation("running", ninjaImg);
    ninja.scale = 0.5
  }

    airplane1();
    soldier1();
    dino1();
    drawSprites();
    fill("yellow");
    text("SCORE:"+score, 1400, 50);
  }  
  
  if(gameState === "END"){
    for(var i=0;i<dinoGroup.length;i++){
      dinoGroup.get(i).remove();
    }
    for(var i=0;i<airplaneGroup.length;i++){
      airplaneGroup.get(i).remove();
    }
    for(var i=0;i<missileGroup.length;i++){
      missileGroup.get(i).remove();
    }
    for(var i=0;i<soldierGroup.length;i++){
      soldierGroup.get(i).remove();
    }
    for(var i=0;i<bulletGroup.length;i++){
      bulletGroup.get(i).remove();
    }
    ninja.visible = false;

    ninjaDied.visible = true;
    gameOver.visible=true;
    bgMusic.stop();
    if(keyDown("r")){
      
      bgMusic.play();
      
      score = 0;
      bg.velocityX = -4;
      
      is1.remove();
      is2.remove();
      is3.remove();
      is4.remove();
      is5.remove();
      is6.remove();

      createInfinityst1();
      createInfinityst2();
      createInfinityst3();
      createInfinityst4();
      createInfinityst5();
      createInfinityst6();
      
      is1state = 0;
      is2state = 0;
      is3state = 0;
      is4state = 0;
      is5state = 0;
      is6state = 0;

      ninjaDied.visible = false;
      gameOver.visible = false; 
      ninja.visible = true;
      ninja.changeAnimation("running", ninjaImg);
      ninja.scale = 0.5;
      bg.addImage(bgImg);

      gameState = "PLAY";
    }

    drawSprites();
    fill("yellow");
    textSize(24);
    text("press 'r' to restart", 700, 350);   
  }
  
  if(gameState === "THANOS"){
    bg.addImage(bgImg);
    bg.velocityX = 0;
    thanos.visible =true;
    if(keyDown("u")){
      fill("yellow");
      laser.velocityX = 30;
      laser.visible = true;
      laserShootSound.play();      
      if(laser.x >= 1200){
        gameState = "SERVE1";
      }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(gameState === "SERVE1"){  
      if(bg.x < 0){
        bg.x = bg.width/2;
      }  
      if(score >= (minScore+5*scoreIncrement) && score <=(minScore+6*scoreIncrement-1)){
        if(is3state === 0){
          is3state = 1;
          is3.visible=true;
          is3.velocityX = -10;
        }
        bg.addImage(bgImg3);
      }else if(score >= (minScore+6*scoreIncrement) && score <=(minScore+7*scoreIncrement-1)){
        if(is4state === 0){
          is4state = 1;
          is4.visible=true;
          is4.velocityX = -10;
        }
        bg.addImage(bgImg4);
      }else if(score >= (minScore+8*scoreIncrement)){
        if(is6state === 0){
          is6state = 1;
          is6.visible=true;
          is6.velocityX = -10;
        }
      }
    }

    ninja.changeAnimation("stop", ninjaStopImg);
    ninja.scale = 0.7;

    for(var i=0;i<dinoGroup.length;i++){
      dinoGroup.get(i).remove();
    }

    for(var i=0;i<airplaneGroup.length;i++){
      airplaneGroup.get(i).remove();
    }

    for(var i=0;i<missileGroup.length;i++){
      missileGroup.get(i).remove();
    }

    for(var i=0;i<soldierGroup.length;i++){
      soldierGroup.get(i).remove();
    }

    for(var i=0;i<bulletGroup.length;i++){
      bulletGroup.get(i).remove();
    }

    ninja.velocityY = ninja.velocityY + +0.8;

    drawSprites();
    fill("yellow");
    textSize(20);
    text("press'u' to kill thanos", 500, 125);
    text("WARNING:you are going back in time machine", 800, 100);
  }

  if(gameState === "WIN"){
    win.visible = true;  
    console.log(4);
    ninja.visible = false;
    thanos.visible = false;
    bg.visible = false;
    laser.visible = false;
    bgMusic.stop();
    drawSprites();

  }
  airplaneGroup.x = missileGroup.x;      
}


function soldier1() {
  
  if (frameCount % 100 === 0) {
    soldier = createSprite(1500, 280, 20, 20);
    soldier.addAnimation("dragonRunning", soldierImg);
    soldier.velocityX = -8;
    soldier.scale = 0.6;
    soldier.setCollider("rectangle", 0, 0, 100, 250);
    soldier.lifetime = 300;
    soldierGroup.add(soldier);
    
    bullet = createSprite(soldier.x, 245, 10, 10);
    bullet.addImage(bulletImg);
    bullet.velocityX = -8;    
    bullet.scale = 0.05;
      
    bulletGroup.add(bullet);
    
  }

  for(var i=0;i < soldierGroup.length; i++){
    if(soldierGroup.get(i).x <= 950){
      bulletGroup.get(i).velocityX = -20;
      sound1.play();
    }
  }
  
  for(var i=0; i < bulletGroup.length;i++){ 
    if(bulletGroup.get(i).x <= 750){
      sound1.stop();
    }
  }
  
}

function airplane1() {
  
  if (frameCount % 200 === 0) {
    airplane = createSprite(1500, 100, 20, 20);
    airplane.addImage("flying", airplaneImg);
    airplane.velocityX = -8;
    airplane.scale = 0.5;
    airplane.lifetime = 300;
    airplane.debug = true;
    airplane.setCollider("rectangle", 0, 0, 200, 200);

    airplane.debug = false;

    airplaneGroup.add(airplane);

    missile = createSprite(1500, 100, 20, 20);
    missile.addImage(missileImg);
    missile.scale = 0.5;
    missile.velocityX = -8;
    missile.lifetime = 300;
    missile.visible = true;
    missile.setCollider("rectangle", 0, 0, 10, 10);

    missileGroup.add(missile);

  }
  for(var i=0;i < airplaneGroup.length; i++){
    if(airplaneGroup.get(i).x <= 950){
      missileGroup.get(i).velocityX = -20;
    }
  }
  
}

function fire1() {
  fire = createSprite(ninja.x, ninja.y, 20, 20);
  fire.addImage(fireImg);
  fire.setCollider("rectangle", 0, 10, 50, 35);
  fire.scale = 1;
  fire.velocityX = 64;
  fire.lifetime = 25;

  ninja.depth = fire.depth;
  ninja.depth = ninja.depth + 1;

  fireGroup.add(fire);

  return fire;  
}

function dino1(){
  if(frameCount % 150 === 0){
    dino = createSprite(1500, 300, 20, 20);
    dino.addAnimation("dinoRunning", dinoImg);
    dino.addAnimation("dinostop", dinoImg1);
    dino.velocityX = -10;
    dino.setCollider("rectangle", 0, 0, 200, 150)

    dino.depth = bg.depth;
    dino.depth = dino.depth + 1;

    dino.debug = false;
    dino.lifetime = 300;

    dinoGroup.add(dino);
  }
}