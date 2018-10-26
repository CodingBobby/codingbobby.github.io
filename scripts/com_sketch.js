/*
AUTHOR: CodingBobby
DATE: 26/10/2018
VERSION: 2.0
PROJECT: algebrarium/...
*/
let t = 0     // time count
let g = 10    // gravitation constant
let fr = 90   // framerate
let v = fr/20 // velocity
let running = false
let touched = false
let cvs = {
  height: 600,
  width: 600
}
let btn = {   // buttons
  start: {
    text: () => {
      if(running) return 'PAUSE'
      else return '  PLAY'
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
let points = {
  a: [],
  b: []
}
let spheres = {
  a: {}, // left sphere
  b: {}, // right sphere
  move: function() {
    if(this.b.x<this.a.x+this.a.r+this.b.r)
      touched = true
    if(!touched) {
      this.a.x+=v
      this.b.x-=v
    }
    else {
      this.b.x+=v*this.a.r/(this.a.r+this.b.r)
      this.a.x-=v*this.b.r/(this.a.r+this.b.r)
    }
  }
}
let drawing = true // disables abillity to add vertices in window
let textStart = 20
let inputWidth = 23
let sidebar = {
  width: 100,
  height: 80
}
let aSlider
let bSlider
function setup() {
  createCanvas(cvs.width,cvs.height)
  textSize(50)
  frameRate(fr)
  // SLIDERS
  aSlider = createSlider(5,200,80)
  aSlider.position(10,2*textStart)
  aSlider.style('width','80px')
  bSlider = createSlider(5,200,10)
  bSlider.position(10,3*textStart)
  bSlider.style('width','80px')
}
function draw() {
  if(t==0) { // position at time start
    spheres.a.x = canvas.width*1/4
    spheres.a.y = canvas.height/2
    spheres.a.r = aSlider.value()
    spheres.b.x = canvas.width*3/4
    spheres.b.y = canvas.height/2
    spheres.b.r = bSlider.value()
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
  // GRAPH
  push()
  stroke(220,60,10)
  for(var i in points.a)
    point(points.a[i].x,points.a[i].y)
  pop()
  push()
  stroke(10,200,60)
  for(var i in points.b)
    point(points.b[i].x,points.b[i].y)
  pop()
  // SPHERES
  let aBool = Boolean(spheres.a.x && spheres.a.y)
  let bBool = Boolean(spheres.b.x && spheres.b.y)
  if(aBool && bBool) { // draw spheres after adding it
    push()
    stroke(220,60,10)
    noFill()
    ellipse(spheres.a.x,spheres.a.y,spheres.a.r*2)
    pop()
    push()
    stroke(10,200,60)
    noFill()
    ellipse(spheres.b.x,spheres.b.y,spheres.b.r*2)
    pop()
    if(running) {
      t++
      spheres.move()
      points.a.push({
        x: t*7,
        y: spheres.a.x+canvas.width*2/4
      })
      points.b.push({
        x: t*7,
        y: canvas.height-spheres.b.x+canvas.width*2/4
      })
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
  else if(onButton(btn.reset,x,y)) {
    t = 0
    points = {a:[],b:[]}
    running = false
    touched = false
  }
}
function onButton(b,x,y) {
  return x > b.x
    && x < b.width+b.x
    && y > b.y
    && y < b.height+b.y
}
