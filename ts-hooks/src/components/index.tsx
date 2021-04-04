import React from 'react'
import Hello from './Hello'
import Button from './State'

interface IThemProps {
  [key: string]: {
    color: string;
    background: string;
  }
}

const themes: IThemProps = {
  'blue': {
    color: '#474747',
    background: 'blue'
  },
  'red': {
    color: 'white',
    background: '#ff762e'
  }
}

export const ThemeContext = React.createContext(themes.red)


const Com: React.FC = () => {
    return (
      <>
      <ThemeContext.Provider value={themes.red}>
        <Hello  />
        <Button />
      </ThemeContext.Provider >
      </>
    )
}

export default Com

