import { useState } from 'react'

function Space6() {
  const [animationOn, setAnimationOn] = useState(false)
  const handleClick = () => {
    setAnimationOn((current) => !current) //set animation on is setting the animationOn variable. And !current is doing the opposite boolean (false)
  }

  return (
    <div>
      <img
        onClick={handleClick}
        style={{ position: 'fixed' }}
        className={animationOn ? 'planet6 spinningAnimation' : 'planet6'} //If the first condition is true, then have planet6 and spin, and if not true just have planet6 (aka not spinning)
        src="./images/planet6.png"
        alt="planet6"
      />
    </div>
  )
}

export default Space6
