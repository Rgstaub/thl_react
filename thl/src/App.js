import React, { Component } from 'react';
import AppBar from './components/AppBar.js';
import LoginPage from './components/LoginPage.js';
import Post from './components/Post'


class App extends Component {
  constructor() {
    super();
    this.state = {
      avatarSrc: './images/userAvatars/avatar.png',
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
      ],
      currentPage: "login",
      loggedIn: false
    }
    this.handleLeagueSelection = this.handleLeagueSelection.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLeagueSelection(){
    console.log("######################");
    this.setState({currentLeague: {
      name: 'Luke',
      id: 'luke'
    }})
  }

  handleLogin() {
    this.setState({loggedIn: true})
  }

  handleLogout() {
    this.setState({loggedIn: false})
    
    Post('logout').then(response => {
      console.log(response)
      this.setState({currentPage: 'login'})
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar
          handleLeagueSelection={this.handleLeagueSelection}
          handleLogout={this.handleLogout}
          {...this.state}
        />
        <LoginPage handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
