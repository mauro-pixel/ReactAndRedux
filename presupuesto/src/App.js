import React, { useState, useEffect } from 'react';

import Pregunta from './components/Pregunta.components';
import Formulario from './components/Formulario.components';
import Listado from './components/Listado.components';
import Control from './components/Control.components';

function App() {

  // definir el state
  const [presupuesto, setGuardarPresupuesto] = useState(0);
  const [restante, setGuardarRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGuardarGastos] = useState([]);
  const [gasto, setGuardarGasto] = useState({});
  const [crearGasto, setGuardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(()=>{
    if(crearGasto){
      //agrega el nuevo presupuesto
      setGuardarGastos([
        ...gastos,
        gasto
      ]);

      // resta del presupuesto
      const prespuestoRestante = restante-gasto.cantidad;
      setGuardarRestante(prespuestoRestante);


      //resetear
      setGuardarCrearGasto(false);

    }
  },[gasto,crearGasto,gastos,restante]);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarPregunta ? ( 
              <Pregunta
                setGuardarPresupuesto={setGuardarPresupuesto}
                setGuardarRestante={setGuardarRestante}
                setMostrarPregunta={setMostrarPregunta}
              /> 
            ):(
              <div className="row">
                  <div className="one-half column">
                    <Formulario
                      setGuardarGasto={setGuardarGasto}
                      setGuardarCrearGasto={setGuardarCrearGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado 
                        gastos={gastos}
                    />
                    <Control
                        presupuesto={presupuesto}
                        restante={restante}
                    />
                  </div>
              </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
