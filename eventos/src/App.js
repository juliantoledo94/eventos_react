import './App.css';
import imagen0 from './imagenes/rey_atanagildo.png'
import imagen1 from './imagenes/rey_sisebuto.png'

function App() {
  const incrementar = (e) =>{
    (e.target.innerHTML++);
  }
  return (
    <>
      <div className="caja" onClick={incrementar}>1</div>
      <button>Aceptar</button>
      <div>
        <img src={imagen0}></img>
      </div>
      <input className="campo"></input>
      
    </>
  );
}

export default App;
