/*
AUTHOR: CodingBobby
DATE: 09/11/2018
VERSION: 1.6
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

let midAxis = { // middle axis, any angles are counted from
  f: {
    x: cvs.width/2,
    y: 0
  },
  t: {
    x: cvs.width/2,
    y: cvs.height
  }
}
let ma = midAxis

let maa = {
  u: {
    min: 1*Math.PI,
    max: 2*Math.PI,
    mid: 3/2*Math.PI
  },
  l: {
    min: 0*Math.PI,
    max: 2*Math.PI,
    mid: 1/2*Math.PI
  }
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
  },
  a: function() { // angle at which total reflection occurs
    return Math.asin(this.l.n/this.u.n)
  }
}

let beams = {
  i: {
    a: 0, // angle to middle axis
    t: midPoint,
    f: function() {
      let xVal, yVal, d, t
      if(Math.abs(this.a) > rad(45)) {
        t = rad(90)+this.a
        d = Math.tan(t)*midPoint.x
        if(this.a < 0) {
          xVal = 0
          yVal = midPoint.y-d
        }
        else {
          xVal = midPoint.x*2
          yVal = midPoint.y+d
        }
      }
      else {
        t = this.a
        d = Math.tan(t)*midPoint.y
        xVal = midPoint.x+d
        yVal = 0
      }
      return {
        x: xVal,
        y: yVal
      }
    }
  },
  o: {
    a: function() {
      if(media.u.n > media.l.n && Math.abs(this.par.i.a) > media.a())
        return -this.par.i.a
      else
        return Math.asin(Math.sin(this.par.i.a)*media.u.n/media.l.n)
    },
    f: midPoint,
    t: function() {
      let xVal, yVal, d, t
      // check if total reflection occurs
      switch(media.u.n > media.l.n && Math.abs(this.par.i.a) > media.a()) {
        case true:
          yVal = this.par.i.f().y
          if(this.par.i.f().x > midPoint.x)
            xVal = 0
          else
            xVal = midPoint.x*2
          break
        case false:
          let a = this.a()
          if(a > rad(45)) {
            t = rad(90)+a
            d = Math.tan(t)*midPoint.x
            if(a < 0)
              xVal = midPoint.x*2
            else
              xVal = 0
            yVal = midPoint.y-d
          }
          else {
            t = a
            d = Math.tan(t)*midPoint.y
            xVal = midPoint.x-d
            yVal = midPoint.y*2
          }
          break
      }
      return {
        x: xVal,
        y: yVal
      }
    }
  },
  init: function() {
    this.o.par = this
    delete this.init
    return this
  }
}.init()
let b = beams

function rad(grd) { // get rad from grd
  return 2*grd*Math.PI/360
}
function grd(rad) { // get grd from rad
  return rad*360/(2*Math.PI)
}

function angleFromX(a,m) { // m=true: upper angle, m=false: lower angle
  if(m) // upper angle
    return rad(270)+a
  else
    return rad(90)+a
}

let btn = { // buttons
  switch: {
    text: 'SWITCH',
    x: 5,
    y: 28,
    height: 20,
    width: 49
  }
}

function mousePressed() {
  let x = mouseX
  let y = mouseY
  // START BUTTON
  if(onButton(btn.switch,x,y)) {
    let tmp = media.u.n
    media.u.n = media.l.n
    media.l.n = tmp
  }
}
function onButton(b,x,y) {
  return x > b.x
    && x < b.width+b.x
    && y > b.y
    && y < b.height+b.y
}

// SETUP
function setup() {
  createCanvas(cvs.width,cvs.height)
  frameRate(fr)

  // SLIDERS
  iSlider = createSlider(-85,85,0)
  iSlider.position(10,10)
  iSlider.style('width','80px')
}
function draw() {
  // INITS
  if(b.i.a != rad(iSlider.value()))
    b.i.a = rad(iSlider.value())

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

  // SWITCH BUTTON
  push()
  fill(120)
  noStroke()
  rect(btn.switch.x,btn.switch.y,btn.switch.width,btn.switch.height)
  textStart = btn.switch.height + 43
  fill(240)
  textSize(10)
  text(btn.switch.text,btn.switch.x+5,textStart-21)
  pop()

  // ANGLES
  push() // ingoing angle
  stroke(240,80,30)
  strokeWeight(1.5)
  noFill()
  let inWholeAngle = angleFromX(b.i.a,true)
  let inStartAngle, inEndAngle
  if(maa.u.mid < inWholeAngle) {
    inStartAngle = maa.u.mid
    inEndAngle = inWholeAngle
  }
  else {
    inStartAngle = inWholeAngle
    inEndAngle = maa.u.mid
  }
  arc(midPoint.x,midPoint.y,200,200,inStartAngle,inEndAngle)
  pop()

  push() // outgoing angle
  stroke(30,240,80)
  strokeWeight(1.5)
  noFill()
  let outWholeAngle = angleFromX(b.o.a(),false)
  let outStartAngle, outEndAngle

  if(media.u.n > media.l.n && Math.abs(b.i.a) > media.a()) {
    if(b.i.a > 0) {
      outStartAngle = angleFromX(b.o.a(),true)
      outEndAngle = maa.u.mid
    }
    else {
      outStartAngle = maa.u.mid
      outEndAngle = angleFromX(b.o.a(),true)
    }
  }
  else {
    if(maa.l.mid < outWholeAngle) {
      outStartAngle = maa.l.mid
      outEndAngle = outWholeAngle
    }
    else {
      outStartAngle = outWholeAngle
      outEndAngle = maa.l.mid
    }
  }
  arc(midPoint.x,midPoint.y,200,200,outStartAngle,outEndAngle)
  pop()

  // HORIZON
  push()
  stroke(190)
  line(h.f.x, h.f.y, h.t.x, h.t.y)
  pop()

  // MIDAXIS
  push()
  stroke(190)
  strokeWeight(1.5)
  line(ma.f.x,ma.f.y,ma.t.x,ma.t.y)
  pop()

  // BEAMS
  push() // incoming beam
  stroke(220,60,10)
  line(b.i.f().x, b.i.f().y, b.i.t.x, b.i.t.y)
  pop()
  push() // outgoing beam
  stroke(10,200,60)
  line(b.o.f.x, b.o.f.y, b.o.t().x, b.o.t().y)
  pop()

  // MIDPOINT
  push()
  strokeWeight(8)
  stroke(250,220,30)
  point(midPoint.x,midPoint.y)
  pop()
}
