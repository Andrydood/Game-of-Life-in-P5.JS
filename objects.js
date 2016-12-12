function makeGrid(gridSize) {

  this.gridSize = gridSize;
  this.grid = [];
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
          if(this.grid[i+j]==0){
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

    for(i=0;i<this.gridSize*this.gridSize;i ++){
      console.log(i);
            if(mouseX > this.buttons[i*8+1] &&
              mouseX < this.buttons[i*8+3] ){
                this.grid[i]=1;
              }


    }

  }

}
