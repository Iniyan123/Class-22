const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine,myWorld,myBody;
function setup() {
 createCanvas(400,400);
 myEngine=Engine.create();
 myWorld=myEngine.world;
 var options={ isStatic:true }
 myBody=Bodies.rectangle(200,380,400,20,options);
 World.add(myWorld,myBody);
 console.log(myBody);
 var options1={
    restitution:1.0 
  }
 myBody1=Bodies.rectangle(200,200,30,30,options1);
 World.add(myWorld,myBody1); 
}
 function draw() {
   background("black");
 Engine.update(myEngine);
 rectMode(CENTER);
 
 rect(myBody.position.x,myBody.position.y,400,20);
 ellipse(myBody1.position.x,myBody1.position.y,30,30);
 }