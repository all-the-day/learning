import React, { useEffect, useState } from 'react'

const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0);
  const [positions, setPositions] = useState({x: 0, y: 0});

  useEffect( () =>{

    const updateMouse = (e: MouseEvent) => {
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  })

  return (
    <div>
      <button
        onClick={
          () => {
            setLike(like + 1)
          }
        }
      > { like } 👍 </button>
      <div>
        X:{  positions.x }, Y:{ positions.y }
      </div>
    </div>
  )
}

export default LikeButton