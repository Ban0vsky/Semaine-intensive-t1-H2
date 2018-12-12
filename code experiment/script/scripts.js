
// Click on the window to change the colors

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const hues = [180, 240, 300]
let huesIndex = 2
let hue = 300
const hueVariation = 60
const blur = 10
const acceleration = 1.05
const minSpeed = 1
const maxSpeed = 4

clearValue = 0.8

const linesCount = 250
const lines = [] 

const windowObj = 
{
  width: window.innerWidth,
  height: window.innerHeight,
  center: 
  {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }
}

window.addEventListener('resize', onResize)
window.addEventListener('click', onClick)

class Line 
{
  constructor(options)
  {  
    this.x = options.x
    this.y = options.y
    
    this.init()
  }
  
  init()
  { 
    this.trailCount = 5
    this.pos = []
    
    this.angle = getRandomFloat(0, Math.PI * 2)
    this.speed = getRandomFloat(minSpeed,maxSpeed)
    this.acceleration = acceleration

    this.hue = getRandomInt(hue - hueVariation, hue + hueVariation)
    this.brightness = getRandomFloat(60, 80)
  }
  
  update()
  {
    this.pos.push({x: this.x, y: this.y})
    if(this.pos.length > this.trailCount)
      this.pos.shift()
    
    this.speed *= this.acceleration
    
    this.x += Math.cos(this.angle) * this.speed
	  this.y += Math.sin(this.angle) * this.speed
    
    if((this.x < 0 || this.x > windowObj.width) && (this.y < 0 || this.y > windowObj.height))
    {
      this.x = windowObj.center.x
      this.y = windowObj.center.y
      
      this.init()
      this.update()
    }
  }
  
  draw()
  {
    ctx.beginPath()
    ctx.moveTo(this.pos[0].x, this.pos[0].y)
    ctx.lineTo(this.x, this.y)
    ctx.shadowBlur = blur
    ctx.shadowColor = `white`
    ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, 1)`
    ctx.stroke()
  }
}

// Init main scene
for(let i = 0; i < linesCount; i++)
{
  setTimeout(() => 
  {
    const line = new Line({x: windowObj.center.x, y: windowObj.center.y})
    lines.push(line)
  }, getRandomInt(0, 500))
}


// Global

function onResize() 
{
  windowObj.width = window.innerWidth
  windowObj.height = window.innerHeight
  windowObj.center.x = windowObj.width / 2
  windowObj.center.y = windowObj.height / 2
  
  canvas.width = windowObj.width
  canvas.height = windowObj.height
}

function onClick()
{
  huesIndex ++
  if(huesIndex >= hues.length)
    huesIndex = 0
  
  hue = hues[huesIndex]
}

function onTick()
{
  ctx.globalCompositeOperation = 'destination-out'
	ctx.fillStyle = `rgba(0, 0, 0, ${clearValue})`
	ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  ctx.globalCompositeOperation = 'lighter'
  
  for(let i = 0; i < lines.length; i++)
  {
    lines[i].update()
    lines[i].draw()  
  }
  
  window.requestAnimationFrame(onTick)
}

// Run

onResize()
onTick()


// Utils

function getRandomFloat(min, max) 
{
    return Math.random() * (max - min) + min
}

function getRandomInt(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
















const 	body = document.getElementsByTagName('body')[0],
		oui = document.getElementById('oui'),
		angle = 15,
		offset = 1,
		gravityPoint = 0.5
		spread = 250


function updatePosition(Y, X) {

	oui.style.transform = `
		rotate3d(
			${(((Y/body.clientHeight)-gravityPoint)*-1)/offset},
			${((X/body.clientWidth)-gravityPoint)/(offset*2)},
			${(
				(((Y/body.clientHeight)-gravityPoint)*-1) + 
				((X/body.clientWidth)-gravityPoint))
			/(offset*8)},
			${angle}deg
		)
		translate(
			${(((X/body.clientWidth)-gravityPoint)/offset)*spread}px,
			${(((Y/body.clientHeight)-gravityPoint)/offset)*spread}px
		)

		translatez(-50px)
	`
}

function handleTouch(e) {
	updatePosition(e.changedTouches[0].clientY, e.changedTouches[0].clientX)
}
	
function handleMouse(e) {
	updatePosition(e.clientY, e.clientX)
}

body.addEventListener("mousemove", (e) => {handleMouse(e)});
body.addEventListener("touchmove", (e) => {handleTouch(e)}, false);


