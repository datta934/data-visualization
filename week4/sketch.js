
let data, cityData, img, dateOptions, sea_desc, bk_desc, s1plot;
let inconsolata;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
function preload() {
    // Kalyan 
    // mainData = loadJSON(
    //   "https://api.openweathermap.org/data/2.5/forecast?lat=19.2396742&lon=73.1366482&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    // );
    // Mumbai 
    // mainData = loadJSON(
    //     "https://api.openweathermap.org/data/2.5/forecast?lat=19.0759899&lon=72.8773928&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    // );
    //Pune
    mainData = loadJSON(
        "https://api.openweathermap.org/data/2.5/forecast?lat=18.5204&lon=73.8567&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    );
    // Jammu 
    // mainData = loadJSON(
    //     "https://api.openweathermap.org/data/2.5/forecast?lat=32.7185614&lon=74.8580917&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    // );
    // Sikkim 
    // mainData = loadJSON(
    //     "https://api.openweathermap.org/data/2.5/forecast?lat=27.649319&lon=88.40538985091041&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    // );
    //Lucknow, 
    // mainData = loadJSON(
    //     "https://api.openweathermap.org/data/2.5/forecast?lat=26.8381&lon=80.9346001&appid=1cf45c746782ad52d1f7aeafe8bc7204&units=metric"
    // );


}

function setup() {
    var myCanvas = createCanvas(1000, 550);
    myCanvas.parent("chart");
    frameRate(0.1);
    cityData = mainData.city;
    push();
    textSize(30);
    textStyle(BOLD);
    fill(0, 102, 153);
    text("City: " + cityData.name, 650, 50);
    text("5 Day Forecast", 10, 50);
    text("Sunrise: " + formatTime(cityData.sunrise), 650, 90);
    text("Sunset: " + formatTime(cityData.sunset), 650, 130);
    pop();
    drawSun(10, 50);
    drawCloud(100, 130);
    drawCloud(120, 110);
    data = mainData.list.filter((element) => {
        if (element.dt_txt.includes("06:00:00")) {
            return element;
        }
    });

    for (let i = 0; i < 5; i++) {
        strokeWeight(0.2);

        push()
        fill("rgba(129, 212, 255, 0.5)")
        rect(10 + i * 200, 200, 180, 280, 15);
        pop()

        textSize(20);
        textStyle(BOLD);


        push()
        fill(0, 102, 153);
        textSize(25);
        text(round(data[i].main.temp_max) + " °C", 70 + i * 200, 410);
        pop();

        push();
        strokeWeight(0.2);
        stroke("#13202d")
        line(40 + i * 200, 310, 170 + i * 200, 310);
        textSize(15);
        text("Feels like " + round(data[i].main.feels_like) + " °C", 50 + i * 200, 330);
        pop();

        push();
        fill("#6375c7");
        noStroke();
        triangle(90 + i * 200 - 5, 350, 90 + i * 200 + 5, 350, 90 + i * 200, 350 - 12);
        ellipse(90 + i * 200, 350, 10, 10);
        pop();
        textSize(12);
        text(data[i].main.humidity + '%', 110 + i * 200, 350);
        drawWind(65 + i * 200, 345);
        text(round(data[i].wind.speed) + 'km/h', 110 + i * 200, 375);


        push()
        stroke(126);
        textSize(18);
        textStyle(BOLD);
        dateOptions = {
            month: "short",
            day: "numeric",
        }
        text(formatDate(data[i].dt, dateOptions), 75 + i * 200, 445);
        pop()

        dateOptions = {
            weekday: "short"
        }
        text(formatDate(data[i].dt, dateOptions), 90 + i * 200, 460);
        // For loading icons by openweather api
        // loadImage("https://openweathermap.org/img/wn/" + data[i].weather[0].icon + "@2x.png", img => {
        //     image(img, 40 + i * 200, 200, 130, 130);
        // });

        //Custom made icons
        switch (data[i].weather[0].main) {
            // Thunderstorm,Drizzle,Rain,Clear, Clouds, Snow, Others
            case "Clear": drawSun(40 + i * 200, 200); break;
            case "Clouds": drawClouds(110 + i * 200, 240); break;
            case "Snow": drawSnow(110 + i * 200, 240); break;
            case "Rain":
            case "Drizzle":
                drawCloud(110 + i * 200, 240);
                drawRain(85 + i * 200, 285);
                drawRain(107 + i * 200, 290);
                drawRain(130 + i * 200, 286);
                break;
            case "Thunderstorm": drawThunderstorm(110 + i * 200, 240); break;
            default: loadImage("https://openweathermap.org/img/wn/50d@2x.png", img => {
                image(img, 40 + i * 200, 200, 130, 130);
            });
        }

    }
}


function formatDate(dt, options) {
    var day = new Date(dt * 1000);
    return day.toLocaleString("en-us", options);
}

function formatTime(time) {
    var day = new Date(time * 1000);
    return day.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function drawSun(x, y) {
    //Clear 
    push();
    fill(245, 187, 87);
    stroke(245, 187, 87);
    strokeWeight(3);
    ellipse(x + 60, y + 60, 30, 30);
    line(x + 15, y + 60, x + 30, y + 60);
    line(x + 25, y + 20, x + 40, y + 38);
    line(x + 60, y + 35, x + 60, y + 20);
    line(x + 80, y + 40, x + 100, y + 20);
    line(x + 90, y + 60, x + 105, y + 60);
    line(x + 80, y + 80, x + 100, y + 95);
    line(x + 60, y + 85, x + 60, y + 100);
    line(x + 20, y + 95, x + 40, y + 80);
    noFill();
    pop();
}

function drawClouds(x, y) {
    //Clouds
    push();
    fill("grey");
    noStroke();
    ellipse(x + 5, y - 8, 50, 30);
    ellipse(x + 23, y + 10, 50, 28);
    fill("#008CCB");
    ellipse(x, y, 50, 30);
    ellipse(x + 10, y + 10, 50, 30);
    ellipse(x - 20, y + 10, 50, 30);
    pop();
}

function drawThunderstorm(x, y) {
    //Clouds
    push();
    noStroke();
    fill("#008CCB");
    ellipse(x, y, 50, 30);
    ellipse(x + 10, y + 10, 50, 30);
    ellipse(x - 20, y + 10, 50, 30);
    fill("#009EFA");
    noStroke();
    triangle(x - 4, y + 50, x + 4, y + 50, x, y + 30);
    ellipse(x, y + 50, 8, 8);
    stroke("#f7aa00");
    strokeWeight(3.5)
    line(x - 20, y + 14, x - 28, y + 34);
    line(x - 10, y + 34, x - 27, y + 34);
    line(x - 15, y + 55, x - 8, y + 34);
    pop();
}

function drawCloud(x, y) {
    //Clouds
    push();
    noStroke();
    fill("#008CCB");
    ellipse(x, y, 50, 30);
    ellipse(x + 10, y + 10, 50, 30);
    ellipse(x - 20, y + 10, 50, 30);
    pop();
}

function drawRain(x, y) {
    push();
    fill("#009EFA");
    noStroke();
    triangle(x - 4, y, x + 4, y, x, y - 18);
    ellipse(x, y, 8, 8);
    pop();
}

function drawSnow(x, y) {
    push();
    noStroke()
    fill("#008CCB");
    ellipse(x, y, 50, 30);
    ellipse(x + 10, y + 10, 50, 30);
    ellipse(x - 20, y + 10, 50, 30);
    fill("#fff")
    ellipse(x - 20, y + 32, 6, 6);
    ellipse(x - 35, y + 35, 5, 5);
    ellipse(x - 25, y + 45, 7, 7);
    ellipse(x, y + 35, 7, 7);
    ellipse(x + 25, y + 40, 5, 5);
    ellipse(x + 10, y + 45, 6, 6);
    ellipse(x + 20, y + 55, 7, 7);
    pop();
}

function getImageData(imageData) {
    // Load icon for weather description
    img = loadImage("https://openweathermap.org/img/wn/" + mainData.list[0].weather[0].icon + ".png");

}



function drawWind(dx, dy) {
    push()
    noFill();
    stroke(255, 72, 0);
    strokeWeight(1.5)
    let p1 = { x: dx + 5, y: dy + 26 };
    let p2 = { x: dx + 35, y: dy + 26 };
    let p3 = { x: dx + 35, y: dy + 35 };
    let p4 = { x: dx + 15, y: dy + 15 };
    curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    p1 = { x: dx + 5, y: dy + 30 };
    p2 = { x: dx + 25, y: dy + 30 };
    p3 = { x: dx + 25, y: dy + 35 };
    p4 = { x: dx + 20, y: dy + 20 };
    curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    p1 = { x: dx + 5, y: dy + 22 };
    p2 = { x: dx + 25, y: dy + 22 };
    p3 = { x: dx + 25, y: dy + 15 };
    p4 = { x: dx + 20, y: dy + 20 };
    curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    pop()
}