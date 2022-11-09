class Tile {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.size = w;
    this.flipping = false;
    this.flipSpeed = 0.7;
    // this.col = color(random(255), random(255), random(255));
    this.col = color(0, random(255), random(255));

  }


  show() {
    if (this.flipping) {
      this.w -= this.flipSpeed;
      if (this.w < -this.size) {
        this.flipping = false;
        this.w = this.size;
      }

      fill(this.col);
      // fill('DeepSkyBlue')
    } else {
      fill(255);
    }

    // noStroke()
    rect(this.x, this.y, this.w, this.h);
  }

  flip(mx, my) {
    if (mx > this.x - this.w / 2 && mx < this.x + this.w /
      2 && my > this.y - this.h / 2 && my < this.y + this
      .h / 2) {
      this.flipping = true;
    }
  }
}