var mainGrid;
var released = 1;

function setup() {
  createCanvas(300,300);
  mainGrid = new makeGrid(4);
  mainGrid.init();
}

function draw() {
  background(255);
  mainGrid.display();
  if(mouseIsPressed && released){
    mainGrid.checkClick();
    released = 0;
  }

}

function mouseReleased(){
released = 1;
}
