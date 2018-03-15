import React, { Component } from 'react';

class InputEmailConfirm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: null,
      warning: ""
    }
  }

  handleChange = (e) => {
    if ( this.state.valid !== null ) {
      this.matchEmail(e.target.value.toLowerCase());
    } 
  }

  // Don't validate the input until after the first time it loses focus
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.matchEmail(e.target.value.toLowerCase());
    } else {
      console.log(e.target.value);
      this.matchEmail(e.target.value.toLowerCase());
    }
  }
  
  matchEmail = (email) => {
    if (email === this.props.emailToMatch) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('emailConfirm', true)
    } else {
      this.setState({ valid: false, warning: 'Email addresses do not match'})
      this.props.returnValue('emailConfirm', false)
    }
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailInput">Confirm email
          <input type="email" name="emailConfirm" id="emailInputConfirm" className="form-control"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>
        <div  id="emailInputConfirmWarning" className="text-danger">{this.state.warning}</div>
      </div>
    )
  }
}
   
export default InputEmailConfirm;

