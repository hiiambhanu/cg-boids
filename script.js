const flock = [];
let alignSlider, cohesionSlider, separationSlider, count;
let img

function setup() {

    alignSlider = document.getElementById('alignSlider');
    cohesionSlider = document.getElementById('cohesionSlider');
    separationSlider = document.getElementById('separationSlider');
    count = document.getElementById('count');

    img = loadImage('./bird.png'); // 

    var canvas = createCanvas(800, 600);

   

    for (var i = 0; i < 10; i++) {
        flock.push(new Boid());
    }

}

function draw() {
    background(0);
    for (let boid of flock) {
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}

function mouseDragged(e){
    if(e.target !== canvas ){
        return false;
    }
    
    flock.push(new Boid({mouseX, mouseY}));
    count.innerHTML = flock.length;
}
