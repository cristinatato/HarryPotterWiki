import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const {getQuery} = props;
    return (
        <React.Fragment>
            <label htmlFor="search">Busca tu personaje</label>
            <input type="text" onChange={getQuery}/>
        </React.Fragment>
    );
};

Filters.propTypes = {
    getQuery: PropTypes.func.isRequired
}
export default Filters;


