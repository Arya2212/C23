class Box{
      constructor(x,y,width,height){
        var boxOptions = {
            restitution : 2
        } 
        this.body=Bodies.rectangle(x,y,width,height,boxOptions);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height)
    }
}