import React from 'react';
import ListCharac from './ListCharac';
import Filters from './Filters';
import PropTypes from 'prop-types';


const Home = props => {
    const {data, getQuery, query, getHouse} = props;
    return (
        <React.Fragment>
            <Filters getQuery={getQuery}/>
            <ListCharac 
            data={data} 
            query={query}
            getHouse={getHouse}/>
        </React.Fragment>
    );
};


Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getQuery: PropTypes.func.isRequired,
    query:PropTypes.string.isRequired
}
export default Home;