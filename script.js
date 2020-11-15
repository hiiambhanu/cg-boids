const flock = [];
let alignSlider, cohesionSlider, separationSlider, count, fps;

var qt;


function insertBoid(e) {
    let boid;
    if (!e) {
        boid = new Boid();

    }
    else {
        boid = new Boid({ mouseX, mouseY });
    }

    if(qt.insert(boid)){
        flock.push(boid);
    }
    // flock.push(boid);
    // qt.insert(boid);
    // return true;

}


function setup() {
    createCanvas(800, 600);

    alignSlider = document.getElementById('alignSlider');
    cohesionSlider = document.getElementById('cohesionSlider');
    separationSlider = document.getElementById('separationSlider');
    count = document.getElementById('count');
    fps = document.getElementById('fps');


    let boundary = new Rectangle(600, 600, 600, 600);
    qt = new QuadTree(boundary, 30);



    for (var i = 0; i < 10; i++) {
        insertBoid();
    }

    count.innerHTML = ` ${flock.length}, ${qt.calc()}`;

}



function draw() {
    fps.innerHTML = frameRate();
    background(0);
    let dp = new Map();
    for (let boid of flock) {
        var snapshot = [...flock];
        boid.flock(snapshot, dp);
        boid.update();
        boid.show();
    }
    delete dp;
}

function mouseDragged(e) {
    if (e.target !== canvas) {
        return false;
    }

    insertBoid(e);

    count.innerHTML = ` ${flock.length}, ${qt.calc()}`;
}
