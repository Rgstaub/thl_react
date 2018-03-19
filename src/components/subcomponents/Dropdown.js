import React, { Component } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className='dropdown'>
        <a href='javascript:void(0)' className='dropdown-toggle-expanded'>Expanded</a>
        <a href='javascript:void(0)' className='dropdown-toggle-collapsed'>=</a>
        <div className='dropdown-items'>
          {this.props.items.map( item => {
            return (
              <p><a href="#">{item}</a></p>
            )
          })}
        </div>
      </div>

    )
  }

}

export default Dropdown;