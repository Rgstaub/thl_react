import React, { Component } from 'react';

class InputEmail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: null,
      warning: ""
    }
  }

  handleChange = (e) => {
    if ( this.state.valid !== null ) {
      this.validateEmail(e.target.value);
    } 
  }

  // Don't validate the input until after the first time it loses focus
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.validateEmail(e.target.value);
    }
  }
  
  validateEmail = (email) => {
    // eslint-disable-next-line
    const regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regEx.test(email)) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('email', email)
    }
    else {
      this.setState({ valid: false, warning: 'Invalid email address' })
      this.props.returnValue('email', '')
    }
  } 

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailInput">Email
          <input type="text" name="email" id="emailInput" className="form-control"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>
        <div  id="emailInputWarning" className="text-danger">{this.state.warning}</div>
      </div>
    )
  }
}
   
export default InputEmail;

