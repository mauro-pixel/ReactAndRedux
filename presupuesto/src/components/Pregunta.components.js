import React, { useState } from 'react'
import Error from './Error.components';
import PropTypes from 'prop-types';

const Pregunta =({ setGuardarPresupuesto,setGuardarRestante,setMostrarPregunta }) => {

    // definir el state de cantidad
    const [cantidad , setGuardarCantidad] = useState(0);
    const [error, setGuardarError] = useState(false);

    // funcion  que va lee el presupuesto
    const definirPresupuesto = e =>{
        setGuardarCantidad(parseInt(e.target.value) || '');
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN( cantidad )){
            setGuardarError(true);
            return;
        }
        // si pasa la validacion
        setGuardarError(false);
        setGuardarPresupuesto(cantidad);
        setGuardarRestante(cantidad);
        setMostrarPregunta(false);
    }

    return(
        <React.Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje=" Presupuesto es Incorrecto" />  : null }
            <form onSubmit={ agregarPresupuesto }>
                <input
                  type="number"
                  className="u-full-width"
                  placeholder="Coloca tu presupuesto"
                  onChange={ definirPresupuesto }
                />
                <input
                   type="submit"
                   className="button-primary u-full-width"
                   value="Definir Presupuesto"
                />
            </form>
        </React.Fragment>
    )
}

Pregunta.propTypes = {
    setGuardarPresupuesto: PropTypes.func.isRequired,
    setGuardarRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;