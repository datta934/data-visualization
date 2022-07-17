function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(400);
  fill(255, 204, 0);
  noStroke();
  ellipse(200, 200, 300, 300);
  fill(210, 105, 30);
  rect(130, 150, 50, 30);
  arc(155, 177, 50, 50, 0, PI);
  noFill();
  stroke(210, 105, 30);
  strokeWeight(3);
  arc(176, 172, 25, 15, -PI / 2, 3 * -PI / 2, OPEN);
  noStroke();
  fill(210, 105, 30);
  rect(130, 110, 5, 30, 20, 20, 20, 20);
  rect(153, 100, 5, 40, 20, 20, 20, 20);
  rect(175, 110, 5, 30, 20, 20, 20, 20);
  rect(220, 150, 50, 30);
  arc(245, 177, 50, 50, 0, PI);
  noFill();
  stroke(210, 105, 30);
  strokeWeight(3);
  arc(267, 172, 25, 15, -PI / 2, 3 * -PI / 2, OPEN);
  noStroke();
  fill(210, 105, 30);
  rect(220, 110, 5, 30, 20, 20, 20, 20);
  rect(242, 100, 5, 40, 20, 20, 20, 20);
  rect(265, 110, 5, 30, 20, 20, 20, 20);
  arc(200, 280, 80, 86, 0, PI);
}