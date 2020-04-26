import React,{ useState,useEffect } from 'react';
import Formulario from './components/formulario.components';
import Cita from './components/cita.components';

function App() {

  //citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  // array  citas
  const [citas,  setCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //funcion para tomar las citas actuales y agregar nuevas citas
  const crearCita = cita =>{
    setCitas([
      ...citas, cita
    ]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
   const nuevasCitas = citas.filter(cita => cita.id !== id );
   setCitas(nuevasCitas);
  }

    // Mensaje condicional
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';


  return (  
    <React.Fragment>
       <h1>Administrador de pacientes</h1>
       <div className="container">
         <div className="row">
           <div className="one-half column">
             <Formulario crearCita={ crearCita }/>
           </div>
           <div className="one-half column">
               <h2>{ titulo }</h2>
              {
                citas.map(cita =>(
                  <Cita  
                  key={ cita.id } 
                  cita={ cita }
                  eliminarCita={ eliminarCita }
                  />
                ))
              }
           </div>
        </div>
       </div>
    </React.Fragment>
  );
}

export default App;
