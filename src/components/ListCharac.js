import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const ListCharac = props => {
    const {data, query, getHouse} = props;
    return (
        <ul className="list">
          {data
          .filter(mycharac => mycharac.name.toUpperCase().includes(query.toUpperCase()))
          .map(charac => {
            return (
              <li className="character" key={charac.newid}>
                <Link to={`/character/${charac.newid}`} >
                <Card 
                charac= {charac}
                getHouse={getHouse}/>
                </Link>
              </li>
            );
          })}
        </ul>
    );
};

ListCharac.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
}
export default ListCharac;