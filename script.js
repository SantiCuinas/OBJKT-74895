let p;
const maxRandom = 100000000000

function setup() {
  render(Math.floor(Math.random() * maxRandom));
}

function render(seed, remove = false) {
  randomSeed(seed);
  createCanvas(310, 310);
  background(random(0, 256), random(0, 256), random(0, 256));

  strokeWeight(10);
  noFill();

  for (let x = 1; x < 12; x += 2) {
    for (let y = 1; y < 12; y += 2) {
      let start = floor(random(0, 5));
      arc(25 * x + 5, 25 * y + 5, 50, 50, 0, HALF_PI * start);
    }
  }

  if (remove) p.remove();

  p = createP(`🌱${seed}`);
  p.style("font-size", "15px");
  p.style("font-family", "Courier New");
  p.style("color", "#dedede");
}

function keyPressed() {
  if (keyCode == 32) render(Math.floor(Math.random() * maxRandom), true);
}
