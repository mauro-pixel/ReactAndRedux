import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers/helpers';

const Control= ({presupuesto, restante}) => {
    return ( 
        <React.Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </React.Fragment>

     );
}

Control.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default Control;