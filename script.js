const flock = [];
let alignSlider, cohesionSlider, separationSlider;


function setup() {

    alignSlider = document.getElementById('alignSlider');
    cohesionSlider = document.getElementById('cohesionSlider');
    separationSlider = document.getElementById('separationSlider');

    createCanvas(800, 600);
    for (var i = 0; i < 100; i++) {
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
