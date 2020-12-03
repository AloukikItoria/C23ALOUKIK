class Box{

constructor(x,y,width,height){

    var boptions = {

       restitution:0.8,
       friction:0.3
        
        
        }

        this.body = Bodies.rectangle(x,y,width,height,boptions)
        this.width = width;
        this.height = height;
        World.add(world,this.body);

}







display(){
    push();
    rectMode(CENTER)
    fill("red")
    stroke("yellow")
    strokeWeight(3);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();


}



}