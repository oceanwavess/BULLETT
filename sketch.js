var thickness, wall;
var bullet, speed, weight;










function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
  thickness = random(22,30)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(12,200)
  weight = random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  

  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if(damage>10){
      wall.shapeColor = color(255,0,0);

    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}




function hascollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}