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
    if ( this.state.valid === false ) {
      this.validateEmail(e.target.value);
    } 
    if (this.state.valid) {
      this.props.returnValue(e.target.value);
    }
  }

  handleBlur = (e) => {
    if (this.state.valid)
    this.validateEmail(e.target.value);
  }
  
  validateEmail = (email) => {
    // eslint-disable-next-line
    const regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regEx.test(email)) {
      //return { valid: true, value: email } 
      this.setState({ valid: true, warning: '' })
      this.props.returnValue(email)
    }
    else {
      this.setState({ valid: false, warning: 'Invalid email address' })
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

/* start with valid:null
onBlur, validate and set valid
if valid: false, validate on each change
if valid: true or null, don't validate on change
*/
