class Levels {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("crimson");
      rect(pos.x, pos.y, this.width, this.height);
    }

/*	play(){
		
			   obstacle = createSprite(random(100, 1000), 0,random(70,140));		
			   obstacleGroup.add(obstacle);
  
     }*/
  };