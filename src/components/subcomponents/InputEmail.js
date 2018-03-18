import React, { Component } from 'react';

class InputEmail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: null,
      warning: ""
    }
  }

  // These two together make it so the field only validates on every change after it first loses focus
  handleChange = (e) => {
    if ( this.state.valid !== null ) {
      this.validateEmail(e.target.value.toLowerCase());
    } 
  }
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.validateEmail(e.target.value.toLowerCase());
    } 
  }
  
  // If the input passes the regex test, update the DOM as appropriate and return values to 
  // update in the parent form's state
  validateEmail = (email) => {
    // eslint-disable-next-line
    const regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regEx.test(email)) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('email', email)
    }
    else {
      this.setState({ valid: false, warning: 'Invalid email address.' })
      this.props.returnValue('email', '')
    }
  } 

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailInput">Email
          <input type="email" name="email" id="emailInput" className="form-control"
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

