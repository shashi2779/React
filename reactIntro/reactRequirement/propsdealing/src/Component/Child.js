import React from 'react'

function Child({firstName,lastName}) {
  return (
    <div>
        <h1>{firstName} {lastName}</h1>
    </div>
  )
}

export default Child