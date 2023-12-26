import './App.css';
import imagen0 from './imagenes/rey_atanagildo.png'
import imagen1 from './imagenes/rey_sisebuto.png'
import {useRef} from 'react'

function App() {
  const cambio = 23.16;
  const refCaja = useRef(); //siempre que use una ref(referencia) tengo que usar el .current
  const incrementar = (e) =>{
    if(e.target.innerHTML>=9){
      e.target.innerHTML=1;
    }
    else{
      e.target.innerHTML++;
    }
    if(e.target.innerHTML>=8){
      e.target.style.background="red"

    }else{
      e.target.style.background="none"
    }
    
    
  }
  const convertir = () =>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML) * cambio;
  }

  const cambioImagen = (e) =>{
    if(e.target.src.includes("atanagildo")){
      e.target.src=imagen1
    }
    else{
      e.target.src=imagen0
    }
    //e.target.src=imagen1
  }

  const lectura = (e) =>{
    //evento onChange hace que cuando escribo en el input me lo refleje en otro lugar ejemplo en la caja.
    refCaja.current.innerHTML=e.target.value
  }

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambioImagen} src={imagen0}></img>
      </div>
      <input onChange={lectura} className="campo"></input>
      
    </>
  );
}

export default App;
