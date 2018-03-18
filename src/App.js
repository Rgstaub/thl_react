

import React, { Component } from 'react';

import './App.css';

import NewUserForm from './components/NewUserForm';
import NavBar from './components/NavBar';

class App extends Component {


  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentWillMount() {

  }


  postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *same-origin
      redirect: 'follow', // *manual, error
      referrer: 'no-referrer' // *client
    })
    .then(response => response.json()) // parses response to JSON
    .catch( err => console.log(err))
  }

  postNewUser(newUser) {
    console.log("POST FUNCTION");
    const url = 'http://api.teamhearthleague.com/public/newUser/';
    this.postData(url, newUser)
    .then( response => console.log(response))
    .catch( err => console.log(err))
  }


  render() {

    return (
      <div className="App">
        <NavBar />
        <NewUserForm 
          onNewUserSubmit={ newUser => this.postNewUser(newUser) }
        />

        

      </div>
    );
  }
}



export default App;
