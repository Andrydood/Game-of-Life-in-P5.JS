/* Author: Andrea Casino*/
/* Date: 12, December, 2016 */


var mainGrid;
var released = 1;
var running = 0;

//set up canvas
function setup() {
  createCanvas(800,800);
  mainGrid = new makeGrid(30);
  mainGrid.init();
}

function draw() {
  //redraw background
  background(255);

  //display grid
  mainGrid.display();

  //check what box is clicked
  if(mouseIsPressed && released){
    mainGrid.checkClick();
    released = 0;
  }

  //if system is running, turn it on
  if(running){
    mainGrid.checkCells();
  }

  //FPS
  frameRate(10);

}

//so that multiple mouse clicks aren't registered
function mouseReleased(){
released = 1;
}

//Key to make it run
function keyPressed() {
  if (key == ' ') {
    if(running==0){
      running=1;
    }
    else{
      running=0;
    }
  }
}
