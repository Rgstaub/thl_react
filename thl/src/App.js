import React, { Component } from 'react';
import AppBar from './components/AppBar.js';



class App extends Component {

  state = {
    avatarSrc: './images/userAvatars/image.png'
  }
  render() {
    return (
      <div className="App">
        <AppBar
          avatarSrc={this.state.avatarSrc}
        />
      </div>
    );
  }
}

export default App;
