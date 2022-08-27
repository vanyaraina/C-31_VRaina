const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImage;
var ground;
var cannon;
var myboat;

var mycannonBall;
var balls = [];


function preload(){
  backgroundImage = loadImage("assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150,350,160,310)
  ground = new Ground(600,560,width,10)
  cannon = new Cannon(180,100,110,50, -PI/4)
  myboat = new Boat(width, height - 100, 200,200)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImage);
  Engine.update(engine);

  tower.display()
  //ground.display()
  cannon.display()
 // mycannonBall.display()
  myboat.display()

  Matter.Body.setVelocity(myboat.body,{x:-5, y:0})

    



 for(i = 0; i < balls.length; i+=1){
  showCannonBalls(balls[i],i)
 }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    mycannonBall = new CannonBall(cannon.x, cannon.y, 50)
    balls.push(mycannonBall)
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
  balls[balls.length - 1].shoot()
}
}

function showCannonBalls(ball, index){
  ball.display()

  if(ball.body.position.x>=width || ball.body.position.y>=height-100){
    World.remove(world,ball.body)
    balls.splice(index,1)
  }

}