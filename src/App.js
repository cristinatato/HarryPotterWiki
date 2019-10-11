import React from 'react';
import './App.css';
import {fetchHP} from './services/get-data';
import Home from './components/Home';
import Detail from './components/Detail';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: ''
    }
    this.getQuery= this.getQuery.bind(this);
    this.getHouse= this.getHouse.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData () {
    fetchHP ()
    .then(data => {
        const newData = data.map((item, index) => {
          return {...item, newid: index + 1}
        });

        this.setState({
          data: newData
        })
    })
  }

  getQuery (event) {
    const value = event.currentTarget.value;
    this.setState({
      query: value
    })
  }

    getHouse (house) {
      if (house === 'Gryffindor') {
        return 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20190222162949';
      } else if (house === 'Slytherin') {
        return 'https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest?cb=20161020182557';
      } else if (house === 'Ravenclaw') {
        return 'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/scale-to-width-down/350?cb=20161020182442';
      } else if (house === 'Hufflepuff'){
        return 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182518';
      } else {
        return null;
      }
    }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Harry Potter Wiki</h1>
        <Switch>
          <Route exact path= "/" render = {()=> {
            return(
              <Home 
              getQuery={this.getQuery}
              data={this.state.data} 
              query={this.state.query}
              getHouse={this.getHouse}/>
            );
          }}/>

          <Route path= "/character/:potterId" render = {(routerProps)=> {
            return (
              <Detail 
              data={this.state.data}
              routerProps={routerProps}
              getHouse={this.getHouse}/>
            );
          }} />
        </Switch>
       
        
      </div>
    );
  }
}

export default App;
