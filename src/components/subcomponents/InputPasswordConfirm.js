import React, { Component } from 'react';

class InputPasswordConfirm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: null,
      warning: ""
    }
  }

  handleChange = (e) => {
    if ( this.state.valid !== null ) {
      this.validatePassword(e.target.value);
    } 
  }

  // Don't validate the input until after the first time it loses focus
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.validatePassword(e.target.value);
    }
  }
  
  validatePassword = (password) => {
    // eslint-disable-next-line
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");    
    if (passwordRegex.test(password)) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('password', password)
    }
    else {
      this.setState({ valid: false, warning: 'Passwords do not match' })
      this.props.returnValue('password', '')
    }
  } 

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailInput">Password
          <input type="password" name="password" id="passwordInput" className="form-control"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>
        <div  id="passwordInputWarning" className="text-danger">{this.state.warning}</div>
      </div>
    )
  }
}
   
export default InputPasswordConfirm;

