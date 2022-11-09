class Rippler {
  constructor() {
    this.ripples = [];
    this.maxSize = 200;
    this.maxSpeed = 5;
  }


  addRipple(x, y, size) {
    let rip = {
      x: x - x % size,
      y: y - y % size,
      size: size,
      maxSize: this.maxSize, // Is this bad practice?
      maxSpeed: this.maxSpeed, // ^
      angle: 0,
      counter: 0,

      animate: function() {
        if (this.size > this.maxSize) {
          return false;
        }
        for (let i = 0; i < 30; i++) {

          let cx = (sin(this.angle) * this.size) +
            this.x;
          let cy = (cos(this.angle) * this.size) +
            this.y;
          tiles.forEach(t => t.flip(cx, cy));
          this.angle += 0.21;
        }
        this.angle = 0;
        this.size += this.maxSpeed;
        return true;
      }
    }

    this.ripples.push(rip);
  }


  showRipples() {
    this.ripples = this.ripples.filter(r => r.animate());
  }




}