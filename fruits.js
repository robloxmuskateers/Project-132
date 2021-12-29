img = "";
status = "";

function preload() {
    img = loadImage('fruits.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#e31c1e");
    text("Apple", 45, 75);
    noFill();
}