const flower_images = ["flower0.png", "flower1.png", "flower2.png"];
const container_div = document.getElementById("container_div");


function ClickToAdvance(frame_images, target_div, x, y) {
    this.images = frame_images; 
    this.frame = 0;             
    this.img = document.createElement("img");
    this.img.src = this.images[0];
    this.img.style.position = "absolute";
    this.img.style.left = x + "px";
    this.img.style.top = y + "px";
    target_div.appendChild(this.img);


    this.handleEvent = function(event) {
        if(this.frame <= this.images.length-1) {
            this.img.src = this.images[this.frame];
            this.frame += 1;
        }   
    }     
        this.img.addEventListener("click", this);
}


for(var i = 0; i < 5; i++) {
    var x = 150 * i;
    var y = Math.floor(Math.random() * 500);
    var flower = new ClickToAdvance(flower_images, container_div, x, y);
}