// create a random draw from 0 to 8
let randomNumber = Math.floor(Math.random()* 8)
console.log(randomNumber)

let eightBall = ''


// create a set of conditions for each of the random numbers that could be drawn.
if (randomNumber === 1) {
  eightBall = 'It is certain'
} else if (randomNumber === 2){
  eightBall = 'It is decidedly so'
}else if (randomNumber === 3){
  eightBall = 'Reply hazy try again'
}else if (randomNumber === 4){
  eightBall = 'Cannot predict now'
}else if (randomNumber === 5){
  eightBall = 'Do not count on it'
}else if (randomNumber === 6){
  eightBall = 'My sources say no'
}else if (randomNumber === 7){
  eightBall = 'Outlook not so good'
}else if (randomNumber === 8){
  eightBall = 'Signs point to yes'
} else {
  eightball = 'draw again'
}

console.log(eightBall)
