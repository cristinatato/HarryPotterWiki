const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchHP = () => {
    return fetch(ENDPOINT).then(res=>res.json())
}

export {fetchHP};
