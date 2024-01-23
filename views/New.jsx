import React from 'react'

const New = () => {
  return (
    <div>
      <h1>Create a new pokemon</h1>
      <form action="/pokemon" method="POST">
        Name: <input type="text" name="name" />
        <button>Add New Pokemon</button>
      </form>
    </div>
  )
}

export default New