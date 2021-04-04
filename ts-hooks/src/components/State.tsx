import React, {  useState, useContext } from 'react'
// import useMousePositions from './useMousePositions';
import useURLLoader from './useURLLoader'
import { ThemeContext } from './index'
interface IShowRes {
  message: string;
  status: string;
}

const LikeButton: React.FC = () => {

  const color = useContext(ThemeContext)

  const [like, setLike] = useState(0);
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [like])
  const dogRes = data as IShowRes

  let A,B

  if(A == B){
    console.log('sfa')
  }

  // const positions = useMousePositions()
  return (
    <div>
      <button
        style={ color }
        onClick={
          () => {
            setLike(like + 1)
          }
        }
      > { like } 👍 </button>
      <div>
        {/* X:{  positions.x }, Y:{ positions.y } */}
      </div>
      <div>
        { dogRes && loading ? '加载中....' :  <img src={ dogRes?.message } alt=""/>}
        </div>
    </div>
  )
}

export default LikeButton