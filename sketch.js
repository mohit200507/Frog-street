const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var greenfrog;
var road;
var car, car2, truck

function preload(){
  frog1 = loadImage("greenfrog.png")
  car = loadImage("car.png")
  car4 = loadImage("car2.png")
 truck1 = loadImage("fire truck.png")

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
 greenfrog = createSprite(600,790)
 greenfrog.addImage(frog1)
 greenfrog.scale=0.25
 car2 = createSprite(40,40);
 car2.addImage(car3);
 car2.scale = 0.2
 car2 = createSprite(40,150);
 car2.addImage(car4)
car2.scale = 0.2
truck(1) = createSprite(40,230);
truck.addImage(truck1);
 truck.scale = 0.2
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
 drawSprites();



}
