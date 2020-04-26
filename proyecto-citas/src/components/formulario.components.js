import React,{ useState } from "react";
import uuid from "react-uuid";
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) =>{

    //crea state de la cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false)

    // funcion  en la cual se ejecuta sobre 
    //los input cuando el usuario escriba algo
    const handleChange = e =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    //extraer valor del los input
    const { mascota,propietario,fecha,hora,sintomas } = cita;

    //funcion de agregar citas
    const submitCita = e =>{
        e.preventDefault();

        //validar campos
        if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            setError(true);
            return;
        }

        // Eliminar el mensaje previo 
        setError(false);

        // asignar un ID
        cita.id = uuid();

        //crear la cita
        crearCita(cita);

        // reiniciar el formulario
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
       <React.Fragment>
           <h2>Crear citas</h2>
           { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
           <form onSubmit={ submitCita}>
               <label>Nombre Mascota</label>
               <input 
                  type="text" 
                  name="mascota" 
                  className="u-full-width"
                  placeholder="nombre mascota"
                  onChange={ handleChange }
                  value={ mascota }
                />
               <label>Nombre Dueño</label>
               <input 
                  type="text" 
                  name="propietario" 
                  className="u-full-width"
                  placeholder="nombre dueño"
                  onChange={ handleChange }
                  value={ propietario }
                />
               <label>Fecha</label>
               <input 
                  type="date" 
                  name="fecha" 
                  className="u-full-width"
                  onChange={ handleChange }
                  value={ fecha }
                />
               <label>Hora</label>
               <input 
                  type="time" 
                  name="hora" 
                  className="u-full-width"
                  onChange={ handleChange }
                  value={ hora }
                />
               <label>Síntoma</label>
               <textarea 
                   name="sintomas" 
                   className="u-full-width" 
                   onChange={ handleChange }
                   value={ sintomas }
                ></textarea>
               <button 
               type="submit"
               className="u-full-width button-primary"
               >Agregar citas</button>
           </form>
       </React.Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;