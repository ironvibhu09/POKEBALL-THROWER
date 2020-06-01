class Pig extends BaseClass {
    constructor(x, y) {
        super(x, y, 80, 80);
        this.image = Enemy();
        this.Visiblity = 255;
    }
    display() {
        if (this.body.speed < 10) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            pop();
        }
    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1005) {
            score++;
        }
    }
};
function Enemy() {
    var chikorita = loadImage("chikorita.png");
    var squirtle = loadImage("squirtle.png")
    var charmander = loadImage("charmander.png");
    var bulbasaur = loadImage("bulbasaur.png");
    var jigglypuff = loadImage("jigglypuff.png");
    var arrayOf = [chikorita,charmander,bulbasaur,jigglypuff,squirtle];
    var index = Math.round(random(0, arrayOf.length - 1));
    return arrayOf[index];
}