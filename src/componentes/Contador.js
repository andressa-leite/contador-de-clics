import React from 'react';
import '../hojas-de-estilo/Contador.css'

/*
function Contador(props) {
  return(
    <div className='contador'>
      {props.numeroClics}
    </div>
  )
}*/

function Contador({ numeroClics }) {
  return(
    <div className='contador'>
      {numeroClics}
    </div>
  )
}

export default Contador;