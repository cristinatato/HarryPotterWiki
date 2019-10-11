import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const {getQuery, getStatus, checked} = props;
    return (
        <React.Fragment>
            <label htmlFor="search">Busca tu personaje</label>
            <input type="text" onChange={getQuery}/>
            <div>
            <label htmlFor="all">
                    <input type="radio" id="all" value="all" onClick={getStatus} />
                    All
                </label>
            </div>
            <div>
                <label htmlFor="alive">
                    <input type="radio" id="alive" value="alive" onClick={getStatus} />
                    Alive
                </label>
            </div>
            <div>
                <label htmlFor="death">
                    <input type="radio" id="death" value="death" onClick={getStatus} />
                    Death
                </label>
            </div>
        </React.Fragment>
    );
};

Filters.propTypes = {
    getQuery: PropTypes.func.isRequired
}
export default Filters;


