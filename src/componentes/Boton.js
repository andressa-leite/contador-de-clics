import React from 'react';
import '../hojas-de-estilo/Boton.css'

/*function Boton(props) {
    return (
        <button>
            {props.texto}
        </button>
    )
}
A função abaixo tem a mesma função desta, porém mostra como é mais utilizado, ou seja, com desestruturação
*/

function Boton({texto, esBotonDeClic, manejarClic}) {
    return (
        <button 
            className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;