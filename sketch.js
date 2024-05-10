const s = 20;
const ls = 2;
const lx = 10;
const a = 40;
const margine = a * 3;

let mic;
const gain = 7;

const ego_width = s * 26;
const ego_height = a * 5;

let traccia;
let amplitude;

function preload() {
  traccia = loadSound("test.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amplitude = new p5.Amplitude();
  amplitude.setInput(traccia);

  traccia.loop();

  // mic = new p5.AudioIn();
  // mic.start();
}

function draw() {
  blendMode(BLEND);
  background(255);

  blendMode(MULTIPLY);
  noStroke();

  let vol = amplitude.getLevel() * gain;
  // let vol = mic.getLevel() * gain;

  /* -- Codice per centrare e scalare in automatico -- */

  const larghezza_composizione = s * 26 + margine * 2; // 26 linee; 2 margini considerando destro e sinistro
  const altezza_composizione = a * 5;

  const scale_factor = width / larghezza_composizione;
  scale(scale_factor);
  translate(margine, (height / scale_factor - altezza_composizione) / 2);

  /* -- ------------------------------------------ -- */

  push();
  fill(0, 0, 0);
  lines(ls, s, a);
  pop();

  push();
  fill("blue");
  ego(10, s, a);
  pop();

  push();
  translate(12 * vol, -15 * vol);
  fill(0, 255, 0);
  ego(4, s, a);
  pop();

  push();
  translate(4 * vol, 14 * vol);
  fill("yellow");
  ego(10, s, a);
  pop();

  push();
  translate(13 * vol, 20 * vol);
  fill(255, 0, 255);
  ego(2, s, a);
  pop();

  push();
  translate(-15 * vol, 26 * vol);
  fill(0, 255, 255);
  ego(3, s, a);
  pop();
}

//

function mouseClicked() {
  if (traccia.isPlaying()) {
    traccia.pause();
  } else {
    traccia.loop();
  }
}

/**
 * s: spessore linea
 * d: distanza tra le linee
 * a: altezza del modulo
 */
function lines(s, d, a) {
  for (let i = 0; i < 26; i++) {
    rect(-s / 2, 0, s, a * 5);
    translate(d, 0);
  }
}

/**
 * s: spessore linea
 * d: distanza tra le linee
 * a: altezza del modulo
 */
function ego(s, d, a) {
  rect(-s / 2, a, s, a * 3);

  translate(d, 0);

  rect(-s / 2, a, s, a * 3);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 2, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 2, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 2, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 2, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, a, s, a * 2);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, a, s, a * 2);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  translate(d, 0);

  rect(-s / 2, a, s, a * 2);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, a, s, a * 2);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 3, s, a);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 3, s, a);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 3, s, a);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 3, s, a);
  rect(-s / 2, a * 5, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a * 5);

  translate(d, 0);

  rect(-s / 2, 0, s, a * 5);

  translate(d, 0);

  translate(d, 0);

  rect(-s / 2, a, s, a * 3);

  translate(d, 0);

  rect(-s / 2, a, s, a * 3);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, 0, s, a);
  rect(-s / 2, a * 4, s, a);

  translate(d, 0);

  rect(-s / 2, a, s, a * 3);

  translate(d, 0);

  rect(-s / 2, a, s, a * 3);
}
