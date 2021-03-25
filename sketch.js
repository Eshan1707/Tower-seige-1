const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
function preload(){
  polygon = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground=new Ground(600,390,1200,20)
    stand1=new Stand(390,300,250,10)
    stand2=new Stand(700,200,250,10)
    box1=new Box(300,275,30,40)
    box2=new Box(330,275,30,40)
    box3=new Box(360,275,30,40)
    box4=new Box(390,275,30,40)
    box5=new Box(420,275,30,40)
    box6=new Box(450,275,30,40)
    box7=new Box(480,275,30,40)
    box8=new Box(330,235,30,40)
    box9=new Box(360,235,30,40)
    box10=new Box(390,235,30,40)
    box11=new Box(420,235,30,40)
    box12=new Box(450,235,30,40)
    box13=new Box(360,195,30,40)
    box14=new Box(390,195,30,40)
    box15=new Box(420,195,30,40)
    box16=new Box(390,155,30,40)
    box17=new Box(620,115,30,40)
    box18=new Box(650,115,30,40)
    box19=new Box(680,115,30,40)
    box20=new Box(710,115,30,40)
    box21=new Box(740,115,30,40)
    box22=new Box(770,115,30,40)
    box23=new Box(800,115,30,40)
    box24=new Box(650,75,30,40)
    box25=new Box(680,75,30,40)
    box26=new Box(710,75,30,40)
    box27=new Box(740,75,30,40)
    box28=new Box(770,75,30,40)
    box29=new Box(680,35,30,40)
    box30=new Box(710,35,30,40)
    box31=new Box(740,35,30,40)
    box32=new Box(710,-5,30,40)
ball=Bodies.circle(50,200,20)
World.add(world,ball)
slingshot=new Slingshot (this.ball,{x:100,y:200})


    
}
function draw(){
    background('Lime')
    ground.display();
    stand1.display();
    stand2.display();
    fill('Blue')
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill('Red')
    box8.display(); 
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill('yellow')
    box13.display();
    box14.display();
    box15.display();
    fill('orange')
    box16.display();
    fill('pink')
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill('Maroon')
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    fill('Indigo')
    box29.display();
    box30.display();
    box31.display();
    fill('Purple')
  box32.display();
  imageMode(CENTER)
image(polygon,ball.position.x,ball.position.y,40,40)
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
   function mouseReleased(){
     slingshot.fly();
   }

