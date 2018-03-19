import React, {Component} from 'react';
import './NavBar.css';
import Dropdown from './subcomponents/Dropdown.js'

class NavBar extends Component {
  
  constructor(props) {
    super(props);

    this.state={
    }
  }


  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav">
          <div className="left-logo nav-item">THL</div>
          <div className="right nav-item">
            <Dropdown 
              items={['one', 'two', 'three']}
            />  
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
