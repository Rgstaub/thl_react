import React, { Component } from 'react';

class InputBnetId extends Component {

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
      this.validateBnetId(e.target.value);
    } 
  }
  handleBlur = (e) => {
    if (this.state.valid === null) {
      this.setState({ valid: false });
      this.validateBnetId(e.target.value);
    } 
  }
  
  // If the input passes the regex test, update the DOM as appropriate and return values to 
  // update in the parent form's state
  validateBnetId = (bnetId) => {
    // eslint-disable-next-line
    const regEx = /^[A-Za-z\u0080-\u00FF]{1}([A-Za-z0-9\u0080-\u00FF]{2,11})#[0-9]{4,5}$/;
    if (regEx.test(bnetId)) {
      this.setState({ valid: true, warning: '' })
      this.props.returnValue('bnetId', bnetId)
    }
    else {
      this.setState({ valid: false, warning: 'Invalid Battle.net ID.' })
      this.props.returnValue('bnetId', '')
    }
  } 

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailInput">Battle.net ID
          <input type="text" name="bnetId" id="bnetIdInput" className="form-control"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>
        <div  id="bnetIdInputWarning" className="text-danger">{this.state.warning}</div>
      </div>
    )
  }
}
   
export default InputBnetId;

