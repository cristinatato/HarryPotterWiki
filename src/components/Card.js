import React from 'react';
import PropTypes from 'prop-types';


const Card = props => {
    const {charac, getHouse} = props;
    return (
        <div className="card">
            <h2 className="name">{charac.name}</h2>
            <img className="img" src={charac.image} alt={charac.name}/>
            <img className="img__house"src={getHouse(charac.house)} alt={charac.house}></img>
        </div>
    );
};

Card.propTypes = {
    charac: PropTypes.object.isRequired
}
export default Card;