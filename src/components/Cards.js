import React from 'react'

function Cards({information, background}) {
  return (
    <div className='cards' style={{backgroundColor:background}}>
      <p>Name: {information.nombre}</p>
      <p>Edad: {information.edad}</p>
      

    </div>
  )
}

export default Cards