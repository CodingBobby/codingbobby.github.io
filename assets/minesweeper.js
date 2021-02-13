class Field {
  constructor(x, y) {
    this.value = 0
    this.x = x
    this.y = y
  }
  updateValue(val) {
    this.value = val
  }
}

function Matrix(x, y, item) {
  let m = []
  for(var j=0; j<y; j++) {
    m.push([])
    for(var i=0; i<x; i++) {
      m[j].push(item(i, j))
    }
  }
  return m
}

function rand(e) {
  return Math.floor(Math.random()*e)
}

function putBombs(mat, d, notOnField) {
  for(var m=0; m<d; m++) {
    let rndX = rand(mat[0].length)
    let rndY = rand(mat.length)
    if(mat[rndY][rndX].value === 9
      || (rndX === notOnField.x && rndY === notOnField.y)) {
      m--
    } else {
      mat[rndY][rndX].updateValue(9)
    }
  }
}

function getNeighbors(x, y) {
  return [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1, y  ],           [x+1, y  ],
    [x-1, y+1], [x, y+1], [x+1, y+1]
  ]
}

function inRange(value, range) {
  let [min, max] = range; max < min ? [min, max] = [max, min] : [min, max]
  return value >= min && value <= max
}

function revealField(field, element) {
  cssReveal(element)

  switch(true) {
    case field.value == 0: {
      let [adjacent, corners] = getAdjacentZeroes(fields, field, [[field.x, field.y]])
      
      adjacent.forEach(z => {
        let id = `${z[0]}_${z[1]}`
        cssReveal(document.getElementById(id))
      })

      corners.forEach(z => {
        let id = `${z[0]}_${z[1]}`
        cssReveal(document.getElementById(id), fields[z[1]][z[0]].value)
      })

      let cornerSum = 0
      corners.forEach(c => cornerSum += fields[c[1]][c[0]].value)

      increaseScroreBy(adjacent.length + corners.length + cornerSum)
      break
    }

    case field.value == 9: {
      document.body.classList.add('lost')
      let id = `${field.x}_${field.y}`
      cssReveal(document.getElementById(id), '💣')
      clearInterval(timerInterv)
      revealAllBombs()
      break
    }

    default: {
      element.innerHTML = field.value
      increaseScroreBy(field.value)
      break
    }
  }
}

function cssReveal(element, value='') {
  element.classList.add('revealed')
  element.innerHTML = value
}

function getAdjacentZeroes(mat, field, zeroes, corners=[]) {
  let [x, y] = [field.x, field.y]
  let directNeighbors = getNeighbors(x, y)

  directNeighbors.forEach(n => {
    if(!isAinB(n, zeroes)) {
      let isField = inRange(n[0], [0, mat[0].length-1])
        && inRange(n[1], [0, mat.length-1])

      if(isField) {
        if(mat[n[1]][n[0]].value === 0) {
          zeroes.push(n)
          [zeroes, corners] = getAdjacentZeroes(mat, mat[n[1]][n[0]], zeroes, corners)
        } else {
          if(!isAinB(n, corners)) corners.push(n)
        }
      }
    }
  })

  return [zeroes, corners]
}

function isAinB(a, b) {
  let itIs = []

  b.forEach(r => {
    let subArrIs = true
    r.forEach((s, i) => {
      if(a[i] !== s) subArrIs = false
    })
    itIs.push(subArrIs)
  })

  return itIs.includes(true)
}

function increaseScroreBy(val) {
  let current = Number(document.getElementById('score').innerText)
  let now = String(current + val)
  let pre = ''

  for(let n=0; n<5-now.length; n++) {
    pre += '0'
  }

  document.getElementById('score').innerText = pre+now
}

function onFirstClick(startField) {
  putBombs(fields, bombCount, startField)

  // count adjacent bombs
  fields.forEach((row, y) => {
    row.forEach((field, x) => {
      if(field.value !== 9) {
        let nearBombs = 0
        let neighbors = getNeighbors(x, y)

        neighbors.forEach(n => {
          let isField = inRange(n[0], [0, row.length-1])
            && inRange(n[1], [0, fields.length-1])
          
          if(isField) {
            if(fields[n[1]][n[0]].value === 9) nearBombs++
          }
        })

        field.updateValue(nearBombs)
      }
    })
  })

  clock = Date.now()
  timerInterv = setInterval(refreshTime, 1000)
}

function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

let timerDisplay = document.getElementById('timer')
let timerInterv

function refreshTime() {
  let nowTotal = Math.floor((Date.now()-clock)/1000)
  let nowMinutes = Math.floor(nowTotal / 60)
  let nowSeconds = nowTotal - nowMinutes*60
  timerDisplay.innerHTML = `${minTwoDigits(nowMinutes)}:${minTwoDigits(nowSeconds)}`
}

function changeBombCount(n) {
  let current = Number(document.getElementById('bombs').innerText)
  let now = current + n
  document.getElementById('bombs').innerText = now
}

function revealAllBombs() {
  fields.forEach(row => {
    row.forEach(field => {
      if(field.value == 9) {
        let id = `${field.x}_${field.y}`
        cssReveal(document.getElementById(id), '💣')
      }
    })
  })
}

function getDoneFieldCount() {
  revealedFields = document.getElementsByClassName('revealed')
  let count = revealedFields.length

  for(let span of document.querySelectorAll('span')) {
    if(span.innerText == '🚩') {
      count++
    }
  }

  return count
}




// field generation, default
let width = 25
let height = 18

let bombCount = Math.round(width*height/10)
let fields = Matrix(width, height, (x, y) => new Field(x, y))

function updateFieldSize(w, h) {
  clearInterval(timerInterv)
  document.body.classList.remove('won')
  document.body.classList.remove('lost')
  clickCount = 0
  clock = 0
  altDown = false
  width = w
  height = h
  bombCount = Math.round(width*height/10)
  fields = Matrix(width, height, (x, y) => new Field(x, y))
  render()
}



// rendering
let $ground = document.getElementById('playground')
let $bombCount = document.getElementById('bombs')

function render() {
  $ground.innerHTML = ''

  fields.forEach((row, y) => {
    let $row = document.createElement('div')
    $row.className = 'field_row'
    $row.row = row
    $ground.appendChild($row)
    row.forEach((field, x) => {
      let $field = document.createElement('span')
      $field.className = 'field'
      $field.id = `${x}_${y}`
      $field.field = field

      $field.onclick = function(event) {
        if(clickCount === 0) {
          onFirstClick(this.field)
        }
      
        if(altDown) {
          if(event.target.innerText == '🚩') {
            event.target.innerText = ''
            changeBombCount(1)
          } else {
            event.target.innerText = '🚩'
            changeBombCount(-1)
          }
        } else {
          if(event.target.innerText != '🚩') {
            revealField(this.field, event.target)
          }
          // do nothing otherwise
        }
      
        if(getDoneFieldCount() == width*height) {
          document.body.classList.add('won')
          clearInterval(timerInterv)
        }
      
        clickCount++
      }

      $row.appendChild($field)
    })
  })

  $bombCount.innerHTML = bombCount
}
render()


// user action
let clickCount = 0
let clock = 0
let altDown = false

document.addEventListener('keydown', function(event) {
  if(event.which == '18') { // ALT
    altDown = true
  }
})

document.addEventListener('keyup', function() {
  altDown = false
})


function processFieldUpdate(e) {
  if(e) e.preventDefault()
  let wi = document.getElementById('width').value
  let he = document.getElementById('height').value

  if(wi && he) {
    updateFieldSize(Math.round(wi), Math.round(he))
  }
  return false
}
