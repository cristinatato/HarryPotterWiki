import React from 'react';
import {Link} from 'react-router-dom';


const Detail = props => {
    const {routerProps, data}= props;
    const potterId = parseInt(routerProps.match.params.potterId);
    const character = data.filter(item => item.newid === potterId);


    if(character[0]) {
        const {getHouse}= props;
        const {name, image, house, dateOfBirth, alive, patronus} = character[0];
        return (
            <React.Fragment>
                <div className="card">
                    <h2 className="name">{name}</h2>
                    <img className="img" src={image} alt={name}/>
                    <p className="house">{house}</p>
                    <img className="house__detail"src={getHouse(house)} alt={house}></img>
                    <p className="birth">Nacimiento: {dateOfBirth ? dateOfBirth : `Desconocido`}</p>
                    <p className="patronus">Patronus: {patronus ? patronus : `Desconocido`}</p>
                    Estado:<i className={alive ? "fas fa-heartbeat" : "fas fa-skull-crossbones"}></i>
                </div>
                <Link to ="/">Volver</Link>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>No hay personajes</p>
                <Link to ="/">Volver</Link>
            </React.Fragment>
        );  
    }
};

export default Detail;

