import './App.css';
import imagen0 from './imagenes/rey_atanagildo.png'
import imagen1 from './imagenes/rey_sisebuto.png'
import {useRef} from 'react'

function App() {
  const cambio = 23.16;
  const refCaja = useRef(); //siempre que use una ref(referencia) tengo que usar el .current
  const incrementar = (e) =>{
    (e.target.innerHTML++);
    
  }
  const convertir = () =>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML) * cambio;
  }
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img src={imagen0}></img>
      </div>
      <input className="campo"></input>
      
    </>
  );
}

export default App;
