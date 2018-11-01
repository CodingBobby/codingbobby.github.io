/*
AUTHOR: CodingBobby
DATE: 01/11/2018
VERSION: 1.0
PROJECT: algebrarium/balance of masses
*/
// SKETCH PROPERTIES
let cvs = { // cvs dimensions
  width: 600,
  height: 600
}
let fr = 90 // freamerate
let t = 0
let btn = { // buttons
  start: {
    text: () => {
      if(running) return 'PAUSE'
      else return '  PLAY' // spaces to center it
    },
    x: 5,
    y: 5,
    height: 20,
    width: 42
  },
  reset: {
    text: 'RESET',
    x: 52,
    y: 5,
    height: 20,
    width: 42
  }
}
let textStart = 20
let inputWidth = 23
let sidebar = {
  width: 100,
  height: 80
}
let running = false
let aSlider
let bSlider
// ITEM PROPERTIES
let floor = {
  start: {
    x: 0,
    y: cvs.height
  },
  end: {
    x: cvs.width*3/4,
    y: cvs.height*1/3
  }
}
let roll = { r: 60 } // radius is also distance between floor and rope
let boxes = {
  a: {},
  b: {},
  move: function() {

  }
}
function setup() {
  createCanvas(cvs.width,cvs.height)
  frameRate(fr)
  // SLIDERS
  aSlider = createSlider(5,300,80)
  aSlider.position(10,2*textStart)
  aSlider.style('width','80px')
  bSlider = createSlider(5,300,10)
  bSlider.position(10,3*textStart)
  bSlider.style('width','80px')
}
function draw() {
  if(t==0) { // position at time start
    // BOX a (on slope)
    boxes.a.m = aSlider.value()
    boxes.a.y = cvs.height-(cvs.height-floor.end.y)/2
    boxes.a.x = pyth([Math.pow(boxes.a.y),"x",distance(floor.start,floor.end)/2]) - pyth([,roll.r,"x"])
    // BOX b (hanging)
    boxes.b.m = bSlider.value()
    boxes.b.x = floor.end.x+roll.r
    boxes.b.y = boxes.a.y
  }
  background(60)
  fill(60)
  strokeWeight(3)
  // SIDEBAR
  push()
  fill(40)
  noStroke()
  rect(0,0,sidebar.width,sidebar.height)
  pop()
  // START BUTTON
  push()
  fill(120)
  noStroke()
  rect(btn.start.x,btn.start.y,btn.start.width,btn.start.height)
  textStart = btn.start.height + 20
  fill(240)
  textSize(10)
  text(btn.start.text(),btn.start.x+5,textStart-21)
  pop()
  // RESET BUTTON
  push()
  fill(120)
  noStroke()
  rect(btn.reset.x,btn.reset.y,btn.reset.width,btn.reset.height)
  textStart = btn.reset.height + 20
  fill(240)
  textSize(10)
  text(btn.reset.text,btn.reset.x+5,textStart-21)
  pop()
  // ITEMS
  push()
  beginShape() // floor
  fill(190)
  noStroke()
  vertex(floor.start.x,floor.start.y)
  vertex(floor.end.x,floor.end.y)
  vertex(floor.end.x,floor.start.y)
  endShape(CLOSE)
  ellipse(floor.end.x,floor.end.y,roll.r) // roll
  pop()
}
function mousePressed() {
  let x = mouseX
  let y = mouseY
  // START BUTTON
  if(onButton(btn.start,x,y)) {
    if(running) // pause movement
      running = false
    else // continue movement
      running = true
  }
  // RESET BUTTON
  else if(onButton(btn.reset,x,y)) { // RESET all changing variables
    t = 0
    running = false
  }
}
function onButton(b,x,y) {
  return x > b.x
    && x < b.width+b.x
    && y > b.y
    && y < b.height+b.y
}
// CALCULATIONS
function distance(p,q) {
  let d = {
    x: Math.abs(p.x-q.x),
    y: Math.abs(p.y-p.y)
  }
  return Math.sqrt(d.x*d.x-d.y*d.y)
}
function pyth([a,b,c]) {
  if(c == "x")
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)) // get hypotinuse
  else {
    if(a == "x")
      let p = b
    else
      let p = a
    return Math.sqrt(Math.pow(c,2)Math.pow(p,2)) // get catete
  }
}
