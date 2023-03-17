function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 640, 480);
  fill(0, 255, 0);
  stroke(0, 255, 0);
  rect(80, 50, 500, 20);
  rect(80, 420, 500, 20);
  rect(40, 70, 20, 400);
  rect(590, 70, 20, 400);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(50, 50, 80);
  circle(600, 50, 80);
  circle(50, 430, 80);
  circle(600, 430, 80);
}
function take_snapshot(){    
  save('student_name.png');
}