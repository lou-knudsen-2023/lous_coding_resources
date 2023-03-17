import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Space4() {
  const [style, newStyle] = useState(false)

  const handleClick = () => {
    const audio = new Audio('./images/woahJo.wav')
    newStyle(true)
    audio.play()
  }

  const img = (
    <img
      onClick={handleClick}
      style={{ width: style ? '1000px' : '50px' }}
      className="orange-planet"
      src="./images/planet4.png"
      alt="orange-planet"
    />
  )

  return <div className="space4">{img}</div>
}

export default Space4
