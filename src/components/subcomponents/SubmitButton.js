import React, { Component } from 'react';

const SubmitButton = (props) => {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     valid: null,
  //     warning: ""
  //   }
  // }

  // handleChange = (e) => {
  //   if ( this.state.valid !== null ) {
  //     this.validateEmail(e.target.value);
  //   } 
  // }



  // Don't validate the input until after the first time it loses focus
  // handleBlur = (e) => {
  //   if (this.state.valid === null) {
  //     this.setState({ valid: false });
  //     this.validateEmail(e.target.value);
  //   }
  // }
  

  // render() {
    return (
      <button className='btn btn-default' onClick={props.submit} disabled={!props.ready}>Register</button>
    )
  //}
}
   
export default SubmitButton;

