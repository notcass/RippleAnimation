class Tile {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.size = w;
    this.flipping = false;
    this.flipSpeed = 0.7;
    // this.col = color(random(255), 0, random(255));
    this.col = color(0, random(255), random(255));
    this.startTime = 0;
  }
}

Tile.prototype.flip = function(mx, my) {
  if (mx > this.x - this.w / 2 && mx < this.x + this.w /
    2 && my > this.y - this.h / 2 && my < this.y + this
    .h / 2) {
    this.flipping = true;
  }
}

Tile.prototype.show = function() {
  if (this.flipping) {
    this.w -= this.flipSpeed;
    if (this.w < -this.size) {
      this.flipping = false;
      this.w = this.size;
    }
    this.startTime++;

    if (this.startTime > 55) this.startTime = 0;

    let c = map(this.startTime, 0, 55, 0, 255);
    fill(c, 255, 255);
    // fill(this.col);
    // fill('DeepSkyBlue')
    rect(this.x, this.y, this.w, this.h);
  } else {
    fill(255);
    // rect(this.x, this.y, this.w, this.h);
    // this.startTime = 0;
  }

  // noStroke()
}