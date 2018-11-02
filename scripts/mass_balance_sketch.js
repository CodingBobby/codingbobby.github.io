/*
AUTHOR: CodingBobby
DATE: 02/11/2018
VERSION: 1.4
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
let floorAngle = angle({ // angle of the floor's slope
  f: floor.start,
  t: floor.end
})
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
    let xMid = pyth([boxes.a.y,"x",distance(floor.start,floor.end)/2])
    let slopePart = roll.r/2 * ( Math.sin(rad(90)) / Math.sin(floorAngle))
    boxes.a.x = xMid-slopePart-roll.r*2
    // boxes.a.x = xMid-2*roll.r/(Math.sin(floorAngle))
    // BOX b (hanging)
    boxes.b.m = bSlider.value()
    boxes.b.x = floor.end.x+roll.r/2
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
  push() // roll center
  stroke(60)
  point(floor.end.x,floor.end.y)
  pop()
  // ROPE from box a
  push()
  stroke(220,60,10)
  let aSeg = roll.r/2 * ( Math.sin(floorAngle) )
  let bSeg = roll.r/2 * ( Math.cos(floorAngle) )
  line(boxes.a.x,boxes.a.y,floor.end.x-aSeg,floor.end.y-bSeg)
  pop()
  // ROPE from box b
  push()
  stroke(10,200,60)
  line(boxes.b.x,boxes.b.y,floor.end.x+roll.r/2,floor.end.y)
  pop()
  // ROPE between boxes a and b
  push()
  stroke(30,80,200)
  line(boxes.a.x,boxes.a.y,boxes.b.x,boxes.b.y)
  pop()
  // BOXES
  let aBool = Boolean(boxes.a.x && boxes.a.y) // checks existence of box coordinates
  let bBool = Boolean(boxes.b.x && boxes.b.y)
  if(aBool && bBool) { // draw boxes after adding it
    push()
    stroke(220,60,10)
    noFill()
    point(boxes.a.x,boxes.a.y)
    ellipse(boxes.a.x,boxes.a.y,roll.r)
    pop()
    push()
    stroke(10,200,60)
    noFill()
    point(boxes.b.x,boxes.b.y)
    ellipse(boxes.b.x,boxes.b.y,roll.r)
    pop()
    if(running) {
      t++
      boxes.move()
    }
  }
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
  let p = a
  if(c == "x") {
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)) // get hypotenuse
  }
  else {
    if(a == "x")
      p = b
    return Math.sqrt(Math.abs(Math.pow(c,2)-Math.pow(p,2))) // get leg
  }
}
function slope(p,q) {
  let x = Math.abs(p.x-q.x)
  let y = Math.abs(p.y-q.y)
  return y*100/x
}
function angle(a) { // a is line with points f and t
  return Math.atan(slope(a.f,a.t))
}
function rad(a) { // converts angle into radian
  return a*Math.PI/180
}
function slopeFromAngle(a) {
  return Math.tan(a)
}
