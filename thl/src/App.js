import React, { Component } from 'react';
import AppBar from './components/AppBar.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      avatarSrc: './images/userAvatars/image.png',
      currentLeague: {
        name: 'Sylvanas League',
        id: 'sylvanas'
      },
      allLeagues: [
        {
          "name": 'Sylvanas League',
          "id": 'sylvanas'
        },
        {
          "name": 'Ragnaros League',
          "id": 'ragnaros'
        },
        {
          "name": 'Mysterious Challenger League',
          "id": 'mysteriousChallenger'
        }
      ]
    }

    this.handleLeagueSelection = (event) => {
      console.log(event);
      this.setState({currentLeague: {
        name: 'Luke',
        id: 'luke'
      }})
    }
  
  }


  render() {
    return (
      <div className="App">
        <AppBar
           handleLeagueSelection={this.handleLeagueSelection} {...this.state}
        />
      </div>
    );
  }
}

export default App;
