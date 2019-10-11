import React from 'react';
import ListCharac from './ListCharac';
import Filters from './Filters';
import PropTypes from 'prop-types';


const Home = props => {
    const {data, getQuery, query, getHouse, getStatus, checked} = props;
    return (
        <React.Fragment>
            <Filters 
            getQuery={getQuery}
            getStatus={getStatus}
            checked={checked}/>
            <ListCharac 
            data={data} 
            query={query}
            getHouse={getHouse}
            checked={checked}
            />
        </React.Fragment>
    );
};


Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getQuery: PropTypes.func.isRequired,
    query:PropTypes.string.isRequired
}
export default Home;