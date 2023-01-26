import React from 'react'

function Sidebar({title}) {
  return (
    <div className='App-sidebar'><h2>{title}</h2>
      <ul>
        <li style={{backgroundColor:'green'}}>Menores de 18 años</li>
        <li style={{backgroundColor:'orange'}}>Entre 18 y 40 años</li>
        <li style={{backgroundColor:'yellow'}}>Entre 40 y 70 años</li>
        <li style={{backgroundColor:'red'}}>Mayores de 40 años</li>
      </ul>
    </div>
  )
}

export default Sidebar