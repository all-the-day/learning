import React from 'react';

interface IHellowProps  {
  message?: string
}

const Hello: React.FC<IHellowProps> = (props) => {
  return <h2>{ props.message }</h2>
}

Hello.defaultProps = {
  message: 'Hello word'
}

export default Hello;
