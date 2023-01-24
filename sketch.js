/**
 *
 *    Flippable Tiles
 *      -Make tile color change make sense: white -> color -> back to white
 */


let tileSize = 10;
let tiles = [];
let rippler;

let counter = 0;

function setup() {
  createCanvas(800, 500).parent('sketch-holder');
  rectMode(CENTER);
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      let t = new Tile(x + tileSize / 2, y + tileSize / 2,
        tileSize, tileSize);
      tiles.push(t);
    }
  }

  rippler = new Rippler();
  colorMode(HSB, 255);

}


function draw() {
  background(18);
  noStroke();

  tiles.forEach(t => {
    t.show();
  });
  rippler.showRipples();

  if (mouseIsPressed) {
    rippler.addRipple(mouseX, mouseY, 1);
  }




  // Random Fireworks
  // if(random() < 0.02) {
  //   let x = random(width);
  //   let y = random(height);
  //   rippler.addripple(x,y,1);
  // }

}



function mousePressed() {
  // rippler.addRipple(mouseX, mouseY, 1);
}

function keyPressed() {
  if (key === 'q') isLooping() ? noLoop() : loop();
  if (key === 'r') redraw();
}

//==========================================================================================
function secondDraw() {
  background(18);


  if (flipping) {
    tileSize -= 10;
  }

  if (tileSize <= 0) {
    fill('antiquewhite');
  } else {
    fill('DeepSkyBlue');
  }

  if (tileSize == -300) {
    flipping = false;
  }


  rect(400, 200, tileSize, 300);
  angle += 0.1;

}

function oldDraw() {
  background(18);

  // tileSize = map(sin(angle), -1, 1, 0, 300);

  // Color
  if (tileSize <= 0.05) {
    console.log('zero');
    colorSwitch = !colorSwitch;
  }

  if (colorSwitch) {
    fill('antiquewhite');
  } else {
    fill('DeepSkyBlue');
  }

  rect(400, 200, tileSize, 300);
  angle += 0.1;

}