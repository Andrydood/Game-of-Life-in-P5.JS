function makeGrid(gridSize) {

  this.gridSize = gridSize;
  this.grid = [];
  this.grid2 = [];
  this.buttons = [];
  this.bordersize=1;
  this.blockSize=floor(width/gridSize);

  this.init = function(){
    for(i=0;i<this.gridSize*this.gridSize;i++){

        this.grid[i]=0;

    }
  }


  this.display = function() {

    counter=0;

    for(i=0;i<this.gridSize;i++){
        for(j=0;j<this.gridSize;j++){

          fill(0);
          quad(i*this.blockSize,j*this.blockSize,
            (i+1)*this.blockSize,j*this.blockSize,
            (i+1)*this.blockSize,(j+1)*this.blockSize,
            i*this.blockSize,(j+1)*this.blockSize);
          if(this.grid[i*this.gridSize+j]==0){
            fill(150);
          }else {
            fill(250);
          }
          quad(i*this.blockSize+this.bordersize,j*this.blockSize+this.bordersize,
            (i+1)*this.blockSize-this.bordersize,j*this.blockSize+this.bordersize,
            (i+1)*this.blockSize-this.bordersize,(j+1)*this.blockSize-this.bordersize,
            i*this.blockSize+this.bordersize,(j+1)*this.blockSize-this.bordersize);

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

            if(mouseX > i*this.blockSize+this.bordersize &&
              mouseX < (i+1)*this.blockSize-this.bordersize &&
              mouseY > j*this.blockSize+this.bordersize &&
              mouseY < (j+1)*this.blockSize-this.bordersize){
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

    for(i=0;i<this.gridSize*this.gridSize;i++){

        this.grid2[i]=this.grid[i];

    }

    for(i=0;i<this.gridSize;i++){
        for(j=0;j<this.gridSize;j++){

          population=this.grid[(i-1)*this.gridSize+j-1]+
                      this.grid[(i-1)*this.gridSize+j]+
                      this.grid[(i-1)*this.gridSize+j+1]+
                      this.grid[(i)*this.gridSize+j-1]+
                      this.grid[(i)*this.gridSize+j+1]+
                      this.grid[(i+1)*this.gridSize+j-1]+
                      this.grid[(i+1)*this.gridSize+j]+
                      this.grid[(i+1)*this.gridSize+j+1];


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

  for(i=0;i<this.gridSize*this.gridSize;i++){

      this.grid[i]=this.grid2[i];

  }

}
}
