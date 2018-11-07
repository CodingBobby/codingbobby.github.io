/*
AUTHOR: CodingBobby
DATE: 07/11/2018
VERSION: 1.4
PROJECT: algebrarium/refraction of light
*/
let cvs = { // canvas dimensions
  width: 600,
  height: 600
}
let fr = 90 // freamerate
let iSlider

// ITEMS
let horizon = { // horizon line
  f: {
    x: 0,
    y: cvs.height/2
  },
  t: {
    x: cvs.width,
    y: cvs.height/2
  }
}

let h = horizon
let midPoint = {
  x: (h.t.x-h.f.x)/2,
  y: h.f.y
}

let media = { // media
  u: { // upper medium
    n: 1.000293, // refraction index
    f: function() {
      return 100/this.n
    }
  },
  l: { // lower medium
    n: 1.333,
    f: function() {
      return 100/this.n
    }
  }
}

let beams = {
  i: {
    f: {
      x: 0, // changed with slider
      y: 0
    },
    t: midPoint
  },
  o: {
    f: midPoint,
    t: {
      add: function() {
        let g = midPoint.x - this.par.i.f.x // x of startpoint to midpoint
        let inAngle = Math.atan(g/(this.y/2))
        let outAngle = Math.asin((Math.sin(inAngle))/media.l.n)
        return Math.tan(outAngle)*this.y/2
      },
      x: midPoint.x, // BUG: this.add() is not a function
      y: midPoint.y*2
    }
  },
  init: function() {
    this.o.t.par = this
    delete this.init
    return this
  }
}.init()
let b = beams
b.o.t.x -= b.o.t.add()

// SETUP
function setup() {
  createCanvas(cvs.width,cvs.height)
  frameRate(fr)

  // SLIDERS
  iSlider = createSlider(-cvs.width,cvs.width*2,80)
  iSlider.position(10,10)
  iSlider.style('width','80px')
}
function draw() {
  // INITS
  if(b.i.f.x != iSlider.value()) { // only when slider is being changed
    b.o.t.x = midPoint.x // reset value and add calculated one
    b.o.t.x += b.o.t.add()
  }
  b.i.f.x = iSlider.value()

  background(60)
  fill(60)
  strokeWeight(3)

  // MEDIA
  push() // upper medium
  fill(media.u.f())
  noStroke()
  rect(0,0,cvs.width,h.f.y)
  pop()
  push() // lower medium
  fill(media.l.f())
  noStroke()
  rect(0,h.f.y,cvs.width,cvs.height)
  pop()

  // BEAMS
  push() // incoming beam
  stroke(220,60,10)
  line(b.i.f.x, b.i.f.y, b.i.t.x, b.i.t.y)
  pop()
  push() // outgoing beam
  stroke(10,200,60)
  line(b.o.f.x, b.o.f.y, b.o.t.x, b.o.t.y)
  pop()

  // HORIZON
  push()
  stroke(190)
  line(h.f.x, h.f.y, h.t.x, h.t.y)
  pop()

  // MIDPOINT
  push()
  strokeWeight(8)
  stroke(250,220,30)
  point(midPoint.x,midPoint.y)
  pop()
}
