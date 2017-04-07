
var canvas
var stateofkey
var bag 
var feather 
var letter 
var bird   

function preload() 
{  
  //sound = loadSound('https://dl.dropboxusercontent.com/s/bziq4gufuakv7go/dolow.mp3');
  a = loadImage('https://dl.dropboxusercontent.com/s/nby1pee3vh3drqh/6316.jpg?dl=0');
  b = loadImage('https://dl.dropboxusercontent.com/s/9aw3nyujtnsyza7/key.png?dl=0');
  bag = loadImage('https://dl.dropboxusercontent.com/s/86maki448clryl7/bag.png?dl=0');
  
  feather = loadImage('https://dl.dropboxusercontent.com/s/bmlhih6hzbeex8m/feather_PNG12978.png?dl=0');
  
  bird =  loadImage('https://dl.dropboxusercontent.com/s/qxamybqv6dqph2n/pigeon_PNG3410.png?dl=0');
  
  letter =  loadImage('https://dl.dropboxusercontent.com/s/vqtwmlk2onu34l6/Cawlin%27s_Letter.png?dl=0');

}

function setup()
{
  //create a drawing service 500px wide, 500px tall
  createCanvas(650,500);
  canvas = 1;
  lock = false;
  stateofkey = 0 
}

function draw()
{
  
  //draw circle in centre of sketch
  labels();
  canvas1();
  showResult();
  fill(0,0,0);
  text("Mouse X "+mouseX,50,230);
  text("Mouse Y "+mouseY,50,290);

 // image(b,20,20,100,50);
  
  if (mouseX > 20 && mouseX < 117 && mouseY > 29 && mouseY < 65 && mouseIsPressed == true)
    {
      stateofkey = 1;
    }
 
  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  else
  {
    canvas1();
  } 

}

function canvas1()
{  background(a);

 fill(255,0,0);
 rect(570,370,20,30);
 fill(255,0,0);
 rect(570,430,20,30);
 
 if (lock == false && mouseX > 570 && mouseX < 590 && mouseY > 370 && mouseY < 400 && mouseIsPressed == true)
 {
   lock == true;
   fill(0,0,0);
   rect(0,0,650,500)
   
 }

 

/* if (lock == true && mouseX > 570 && mouseX < 590 && mouseY > 430 && mouseY < 458 && mouseIsPressed == true)
 {
   if (canvas == 1)
   {
     canvas = 2;
   }
   else if (canvas == 2)
   {
     canvas = 1;
   }
 }
 */

 if (stateofkey == 0) 
 {
 }
  if (stateofkey == 1)
  {
    image(b,300,450,100,50);
  }
  if (stateofkey == 2)
  {
    image(letter,20,450,100,50);
  }
  if (stateofkey == 3)
  { 
   image(bird,50,50,100,100);
  }
  if (stateofkey == 4)
  {
    image(feather,200,300,100,100);
  } 
  

 if (lock == false && mouseX > 570 && mouseX < 590 && mouseY > 430 && mouseY < 458 && mouseIsPressed == true)
 {
   if (stateofkey == 0)
   {
     stateofkey = 1
   }
   else if (stateofkey == 1) 
   {
     stateofkey = 2;
   }
   else if (stateofkey == 2)
   {
     stateofkey = 3;
   }
   else if (stateofkey == 3) 
   {
     stateofkey = 4
   } 
   else if (stateofkey == 4)
   {
     stateofkey = 1;
   }
   
   lock = true; 
 }
 
  
 
 fill(255,0,0);
 text("Mouse X "+mouseX,50,230);
 text("Mouse Y "+mouseY,50,290);
}

function canvas2()
{
  background(0,0,0);
  paintNavigation();
} 

function labels()
{

}
function paintNavigation()
{  
  
}

function showResult()
{

}
function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}