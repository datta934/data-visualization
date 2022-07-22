function preload() {
    data = loadJSON("p5js-visualization.json");
}

function setup() {
    var myCanvas = createCanvas(1200, 1200);
    myCanvas.parent("chart");
    strokeWeight(3);
    strokeCap(SQUARE);
    noFill();
    textAlign(CENTER, CENTER);
    noLoop();
}

function draw() {
    let jump = 170;
    for (let y = 0, z = 0; y < 7; y++, z + 7) {
        for (let x = 0; x < 7; x++, z++) {
            if (data[z]) {
                switch (data[z].Genre) {
                    case "action":
                        fill("#6baed6");
                        break;
                    case "drama":
                        fill("#74c476");
                        break;
                    case "love_story":
                        fill("#de2d26");
                        break;
                    case "thriller":
                        fill("#fd8d3c");
                        break;
                    case "biography":
                        fill("#969696");
                        break;
                    default:
                        fill("#ffffd4");
                }
                stroke("#000");
                strokeWeight(2);
                rect(x * jump + 10, y * jump + 10, 620 / 5, 620 / 5);
                strokeWeight(5);
                stroke("#fec44f");
                arc(
                    x * jump + 70,
                    y * jump + 70,
                    100,
                    100,
                    0,
                    2 * PI * data[z].IMDB * (36 / 360)
                );
                if (data[z].Remake) {
                    stroke("#54278f");
                    fill("#54278f");
                    circle(x * jump + 70, y * jump + 56, 25, 35);
                    circle(x * jump + 57, y * jump + 79, 25, 35);
                    circle(x * jump + 84, y * jump + 77, 25, 35);
                }

                if (data[z].Franchise) {
                    stroke("#08519c");
                    fill("#08519c");
                    circle(x * jump + 84, y * jump + 59, 25, 35);
                    circle(x * jump + 57, y * jump + 59, 25, 35);
                    circle(x * jump + 70, y * jump + 81, 25, 35);
                }
                if (data[z].Release == "holiday") {
                    stroke("#a50f15");
                    noFill();
                    circle(x * jump + 70, y * jump + 70, 10);
                } else {
                    stroke("#000");
                    noFill();
                    circle(x * jump + 70, y * jump + 70, 10);
                }
                fill(0);
                stroke(0);
                strokeWeight(0.6);
                text(data[z].MovieName, x * jump + 15, y * jump + 145, 120);
            }
        }
    }
}
