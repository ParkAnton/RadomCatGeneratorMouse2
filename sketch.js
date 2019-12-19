let bugs=[];
let cats = [];

function preload(){
    for(let i=0; i<11; i++){
    cats[i]= loadImage('data/cat'+ i +'.png');
}
}

function setup() {
    imageMode(CENTER);
    createCanvas(1920 , 1080);

}

function mousePressed(){
    let cat = random(cats);
    let diameter = random(200,500);
   // let rotateCat = random(-TWO_PI,TWO_PI);
    let b = new JitterBug(mouseX,mouseY,diameter,cat);
    bugs.push(b);
  
}

function draw() {
    background(255);
    
    textSize(100);
    fill(random(255),random(255),random(25));
    text('CLICK MOUSE for generate CAT',150,450)

    for (let i=0; i<bugs.length; i++){              
    bugs[i].move();
    bugs[i].display();
    }

}   
