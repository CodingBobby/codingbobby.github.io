/*
AUTHOR: CodingBobby
DATE: 16/05/2021
VERSION: 0.1
PROJECT: algebrarium/attractor
*/

// canvas properties
const canvSize = 650
const FPS = 30
let fps = FPS
const fontSize = 14

// factors for attractor calculation
let zoom = 8
let timeScale = 1/200
let pointLimit = 750

// angles in 3D
let alph = 0
let beth = 0
let gamm = 0
let gammSpeed = 1/3 // deg/frame

// starting condition
let attractor = [[0.001, 0.001, 0.001]]

const SYSTEMS = {
  lorenz: function(x, y, z) {
    const a = 10
    const b = 28
    const c = 8/3

    return [
      a*(y - x),
      x*(b - z) -y,
      x*y - c*z
    ]
  },
  aizawa: function(x, y, z) {
    const a = 0.7
    const b = 3.5
    const c = 0.6
    const d = 0.95
    const e = 0.25
    const f = 0.1

    let dz = c + d*z - z**3/3 - (1 - e*z)*(x**2 + y**2) + f*z*x**3

    return [
      x*(z - a) - dz,
      b*x + y*(z - a),
      dz
    ]
  },
  nose_hoover: function(x, y, z) {
    const a = 1.5

    return [
      y,
      -x + y*z,
      a - y**2
    ]
  }
}


function nextPoint() {
  let [x, y, z] = attractor[attractor.length-1]

  let d = SYSTEMS.lorenz(x, y, z)

  let xn = x + d[0]*timeScale
  let yn = y + d[1]*timeScale
  let zn = z + d[2]*timeScale

  attractor.push([xn, yn, zn])

  if (attractor.length > pointLimit) {
    attractor.shift()
  }
}

// when pre-calculation of n points is wanted
// for (var i=0; i<5000; i++) {
//   nextPoint()
// }

// rotate a point in 3D for rendering
function rotatePoint(vector, pitch, roll, yaw) {
  let cosa = cos(yaw)
  let sina = sin(yaw)

  let cosb = cos(pitch)
  let sinb = sin(pitch)

  let cosc = cos(roll)
  let sinc = sin(roll)

  let Axx = cosa*cosb
  let Axy = cosa*sinb*sinc - sina*cosc
  let Axz = cosa*sinb*cosc + sina*sinc

  let Ayx = sina*cosb
  let Ayy = sina*sinb*sinc + cosa*cosc
  let Ayz = sina*sinb*cosc - cosa*sinc

  let Azx = -sinb
  let Azy = cosb*sinc
  let Azz = cosb*cosc

  let px = vector[0]
  let py = vector[1]
  let pz = vector[2]

  return [
    Axx*px + Axy*py + Axz*pz,
    Ayx*px + Ayy*py + Ayz*pz,
    Azx*px + Azy*py + Azz*pz
  ]
}


function drawCanvas() {
  push()
  background(250)
  strokeWeight(4)
  rect(0, 0, canvSize, canvSize)
  pop()
}


function setup() {
  let canv = createCanvas(canvSize, canvSize)
  canv.parent('animation')
  frameRate(fps)
  angleMode(DEGREES)
  drawCanvas()
  redraw()
}


function draw() {
  frameRate(fps)
  stroke(0)
  drawCanvas() // cover post drawings
  noFill()

  nextPoint() // get next point if they are not pre-calculated

  // rotate in space
  if (fps !== 0) {
    gamm += gammSpeed
  }

  // render all the points
  push()
  strokeWeight(2)

  // transform canvas
  translate(canvSize/2, canvSize*5/6)
  scale(1, -1)

  beginShape()
  for (p in attractor) {
    // transform attractor according to zoom and rotation
    let currPoint = attractor[p].map(q => q*zoom)
    let [x, y, z] = rotatePoint(currPoint, alph, beth, gamm)

    vertex(x, z)

    // emphasize last point
    if (p == attractor.length-1) {
      push()
      strokeWeight(5)
      point(x, z)
      pop()
    }
  }
  endShape()
  pop()

  // show frame information
  push()
  textSize(fontSize)
  strokeWeight(1)
  fill(0)
  textAlign(LEFT)
  text('t = ' + (frameCount*timeScale).toFixed(3) + ' s', fontSize/2, fontSize*1.3)
  pop()
}


function keyPressed() {
  switch (keyCode) {
    case 80: { // P to pause animation
      fps = fps == FPS ? 0 : FPS
      redraw()
      break
    }

    case RIGHT_ARROW: {
      if (fps === 0) {
        gamm++
        redraw()
      } else {
        gammSpeed = abs(gammSpeed)
      }
      break
    }

    case LEFT_ARROW: {
      if (fps === 0) {
        gamm--
        redraw()
      } else {
        gammSpeed = -abs(gammSpeed)
      }
      break
    }
  }
}
