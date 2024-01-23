import React from 'react'

const myStyle= {
    color: "#ffffff",
    backgroundColor: "#000000"
};

const Index = ({pokemon}) => {
  return (
    <div style={myStyle}>
        <h1>See all the Pokemon!!</h1>
        <ul>
          {pokemon.map((pokemon, i) => (
            
            <li key={i}><a href={`/pokemon/${i}`}>{pokemon.name}</a></li>
            
          ))}
        </ul>
        
    </div>
  )
}

export default Index