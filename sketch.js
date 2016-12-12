var mainGrid;
var released = 1;
var running = 0;

function setup() {
  createCanvas(800,800);
  mainGrid = new makeGrid(64);
  mainGrid.init();
}

function draw() {
  background(255);

  mainGrid.display();

  if(mouseIsPressed && released){
    mainGrid.checkClick();
    released = 0;
  }

  if(running){
    mainGrid.checkCells();
  }

  frameRate(10);

}

function mouseReleased(){
released = 1;
}

function keyPressed() {
  if (key == 'R' || key == 'r' ) {
    if(running==0){
      running=1;
    }
    else{
      running=0;
    }
  }
}
