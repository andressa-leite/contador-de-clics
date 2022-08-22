import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/logo.png'
import { useEstate, useState } from 'react'

function App() {
  const [numeroClics, setnumeroClics] = useState(0)

  const manejarClic = () => {
    setnumeroClics(numeroClics + 1);
  }
  const reiniciarContador = () => {
      setnumeroClics(0)
  }
  
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}/>
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics= {numeroClics} />

        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
