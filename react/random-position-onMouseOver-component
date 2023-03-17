import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Aliens() {
  const [leftPos, newLeft] = useState(10)
  const [topPos, newTop] = useState(10)

  const handleClick = () => {
    const audio = new Audio('./images/alienSound.wav')
    audio.loop = true
    audio.play()

    newLeft(Math.floor(Math.random() * 50))
    newTop(Math.floor(Math.random() * 10))
    console.log(leftPos)
  }

  const img = (
    <img
      onMouseOver={handleClick}
      onClick={handleClick}
      className="alienShip"
      src="./images/alienShip.png"
      style={{ left: leftPos + 'vw', position: 'fixed', top: topPos + 'vw' }}
      alt="aliens"
    />
  )

  return <div className="Aliens">{img}</div>
}

export default Aliens
