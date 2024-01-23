import React from 'react'

const Show = ({pokemon}) => {
  return (
    <div>
      <h1>You got to catch them up!</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img}/>
      
      <a href='/pokemon'>Goback</a>
      
    </div>
  )
}

export default Show