import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class NavBar extends Component {
  
  constructor(props) {
    super(props);

    this.state={
    }
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">THL</a>
        </nav>
        <Button>Stuff</Button>
      </div>
    );
  }
}

export default NavBar;
