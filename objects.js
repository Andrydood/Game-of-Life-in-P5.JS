/* Author: Andrea Casino*/
/* Date: 12, December, 2016 */

//Variable size grid object
function makeGrid(gridSize) {

  this.gridSize = gridSize;
  this.grid = [];
  this.grid2 = [];
  this.buttons = [];
  this.bordersize=1;
  this.blockSize=floor(width/gridSize);

  //initialises grid to be all 0s
  this.init = function(){
    for(i=0;i<this.gridSize*this.gridSize;i++){

        this.grid[i]=0;

    }
  }


  this.display = function() {

    counter=0;
    //Displays every square
    for(i=0;i<this.gridSize;i++){
        for(j=0;j<this.gridSize;j++){

          //Displays black background
        
            //Checks if square is alive or dead
          if(this.grid[i*this.gridSize+j]==0){
            fill(150);
          }else {
            fill(250);
          }

          //displays square;
          quad(i*this.blockSize+this.bordersize,j*this.blockSize+this.bordersize,
            (i+1)*this.blockSize-this.bordersize,j*this.blockSize+this.bordersize,
            (i+1)*this.blockSize-this.bordersize,(j+1)*this.blockSize-this.bordersize,
            i*this.blockSize+this.bordersize,(j+1)*this.blockSize-this.bordersize);

            //Defines square area
            this.buttons.push(i*this.blockSize+this.bordersize,j*this.blockSize+this.bordersize,
              (i+1)*this.blockSize-this.bordersize,j*this.blockSize+this.bordersize,
              (i+1)*this.blockSize-this.bordersize,(j+1)*this.blockSize-this.bordersize,
              i*this.blockSize+this.bordersize,(j+1)*this.blockSize-this.bordersize);


        }
    }

  }

  this.checkClick = function(){

    for(i=0;i<this.gridSize;i++){
        for(j=0;j<this.gridSize;j++){

            //checks if mouse is within the square area
            if(mouseX > i*this.blockSize+this.bordersize &&
              mouseX < (i+1)*this.blockSize-this.bordersize &&
              mouseY > j*this.blockSize+this.bordersize &&
              mouseY < (j+1)*this.blockSize-this.bordersize){

                //if it is, switch whatever color it is
                if(this.grid[i*this.gridSize+j]==1){

                  this.grid[i*this.gridSize+j]=0;

                }
                else{
                  this.grid[i*this.gridSize+j]=1;
                }

              }
        }


    }

  }

  this.checkCells = function(){

    //make copy of living and dead cells
    for(i=0;i<this.gridSize*this.gridSize;i++){

        this.grid2[i]=this.grid[i];

    }

    for(i=0;i<this.gridSize;i++){
        for(j=0;j<this.gridSize;j++){

          //calculates sorrounding population of cells
          //different cases due to edges and corners

          if(i==0 && j==0){
            population=
                      this.grid[(i)*this.gridSize+j+1]+
                      this.grid[(i+1)*this.gridSize+j]+
                      this.grid[(i+1)*this.gridSize+j+1];
          }
          else if(i== this.gridSize-1 && j==this.gridSize-1){
            population=this.grid[(i-1)*this.gridSize+j-1]+
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i)*this.gridSize+j-1];
          }
          else if(i== 0 && j==this.gridSize-1){
            population=
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j];
          }
          else if(i== this.gridSize-1 && j==0){
            population=
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i-1)*this.gridSize+j+1]+
                      this.grid[(i)*this.gridSize+j+1];
          }
          else if (i==0){
            population=
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i)*this.gridSize+j+1]+
                      this.grid[(i+1)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j]+
                      this.grid[(i+1)*this.gridSize+j+1];
          }
          else if (j==0){
            population=
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i-1)*this.gridSize+j+1]+
                      this.grid[(i)*this.gridSize+j+1]+
                      this.grid[(i+1)*this.gridSize+j]+
                      this.grid[(i+1)*this.gridSize+j+1];
          }

          else if (i==this.gridSize-1){
            population=this.grid[(i-1)*this.gridSize+j-1]+
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i-1)*this.gridSize+j+1]+
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i)*this.gridSize+j+1];
          }
          else if (j==this.gridSize-1){
            population=this.grid[(i-1)*this.gridSize+j-1]+
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j];
;
          }
          else{
            population=this.grid[(i-1)*this.gridSize+j-1]+
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i-1)*this.gridSize+j+1]+
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i)*this.gridSize+j+1]+
                      this.grid[(i+1)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j]+
                      this.grid[(i+1)*this.gridSize+j+1];
        }
        //saves answer on copy so that the current changes don't affect population
        //calculation
        if(population<2) {
          this.grid2[i*this.gridSize+j]=0;
        }
        else if(population==2) {
          this.grid2[i*this.gridSize+j]=this.grid[i*this.gridSize+j];
        }
        else if(population==3) {
          this.grid2[i*this.gridSize+j]=1;
        }
        else if(population>3) {
          this.grid2[i*this.gridSize+j]=0;
        }


      }

  }

  //copy changes onto main grid
  for(i=0;i<this.gridSize*this.gridSize;i++){

      this.grid[i]=this.grid2[i];

  }

}
}
