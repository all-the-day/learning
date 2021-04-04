import React ,{ useContext } from 'react';
import useMousePositions from './useMousePositions';
import { ThemeContext } from './index'
interface IHellowProps  {
  message?: string
}

const Hello: React.FC<IHellowProps> = (props) => {

  const reds = useContext(ThemeContext)

  const positions = useMousePositions()

  return <> 
    <h2
      style={ reds }
    >{ props.message }</h2>

    <button>
      X:{  positions.x }, Y:{ positions.y }
    </button>
  </>
}

Hello.defaultProps = {
  message: 'Hello word'
}

export default Hello;
