import React, { useState } from 'react';
import Error from './Error.components';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ setGuardarGasto,setGuardarCrearGasto }) =>{

    // Definir state
    const [nombre, setGuardarNombre] = useState('');
    const [cantidad, setGuardarCantidad] = useState(0);
    const [ error, setGuardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad) || nombre.trim() === '') {
            setGuardarError(true);
            return;
        }
        setGuardarError(false);

        // construir el gasto
        const gasto = {
            id: shortid.generate(),
            nombre, 
            cantidad       
        }

        // pasar el gasto al componente principal
        setGuardarGasto(gasto);
        setGuardarCrearGasto(true);

        // resetear el form
        setGuardarNombre('');
        setGuardarCantidad(0);
    }

    return(
        <form onSubmit={agregarGasto} >
            <h2>Agrega tus gastos aqui</h2>
            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }
            <div className="campo">
                <label>Nombre Gasto:</label>
                <input
                   type="text"
                   className="u-full-width"
                   placeholder="Ej. Transporte"
                   value={nombre}
                   onChange={e => setGuardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto:</label>
                <input
                   type="number"
                   className="u-full-width"
                   placeholder="Ej. 100"
                   value={cantidad}
                   onChange={e => setGuardarCantidad(parseInt( e.target.value) || '')}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    setGuardarGasto: PropTypes.func.isRequired,
    setGuardarCrearGasto: PropTypes.func.isRequired
}
 

export default Formulario;