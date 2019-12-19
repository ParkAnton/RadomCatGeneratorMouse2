class JitterBug {
    constructor(x, y, diameter, img) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 1.5;
        this.cat = img;
        this.r =  random(-TWO_PI,TWO_PI);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        // imageMode(CENTER);
        push();
        translate(this.x, this.y);

        rotate(this.r);
        image(this.cat, 0, 0, this.diameter, this.diameter);
       pop();
    }
}