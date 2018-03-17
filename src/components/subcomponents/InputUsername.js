import React, { Component } from 'react';

class InputUsername extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      warning: ""
    }
  }

  handleChange = (e) => {
      this.validateUsername(e.target.value);
  }

  // If the input passes the regex test, update the DOM as appropriate and return values to 
  // update in the parent form's state
  validateUsername = (username) => {
    // eslint-disable-next-line
    const regEx = /^[A-Za-z\u0080-\u00FF]{2,20}/;
    if (regEx.test(username)) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('username', username)
    }
    else {
      this.setState({ valid: false, warning: 'Invalid username.' })
      this.props.returnValue('username', '')
    }
  } 

  render() {
    return (
      <div className="form-group">
        <label htmlFor="usernameInput">THL Username
          <input type="text" name="username" id="usernameInput" className="form-control"
            //onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>
        <div  id="usernameInputWarning" className="text-danger">{this.state.warning}</div>
      </div>
    )
  }
}
   
export default InputUsername;

