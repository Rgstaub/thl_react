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
      this.matchPassword(e.target.value);
    } 
  }

  // Don't validate the input until after the first time it loses focus
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.matchPassword(e.target.value);
    } else {
      this.matchPassword(e.target.value);
    }
  }
  
  matchPassword = (password) => {
    if (password === this.props.passwordToMatch) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('passwordConfirm', true)
    } else {
      this.setState({ valid: false, warning: 'Passwords do not match'})
      this.props.returnValue('passwordConfirm', false)
    }
  }

  render() {
    return (
      <div className="form-group">
        <p>{this.props.passwordConfirm}</p>
        <label htmlFor="emailInput"> Confirm password
          <input type="password" name="password" id="passwordInputConfirm" className="form-control"
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

