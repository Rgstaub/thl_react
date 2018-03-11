import React, { Component } from 'react';

const InputEmail = (props) => {

  const warning = document.getElementById('emailInputWarning');

  const handleChange = (e) => {
    if ( validateEmail(e.target.value).valid ) {
      document.getElementById('emailInputWarning').textContent = "";
      props.returnValue('email', e.target.value)
    } else {
      document.getElementById('emailInputWarning').textContent = "invalid email";
      props.returnValue('email', "")
    }
  }
  
  const validateEmail = (email) => {
    // eslint-disable-next-line
    const regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regEx.test(email)) {
      return { valid: true, value: email } 
    }
    else {
      return { valid: false, value: email }
    }
  } 

  return (
    <div className="form-group">
      <label htmlFor="emailInput">Email
        <input type="text" name="email" id="emailInput" className="form-control"
          onChange={handleChange}
        />
      </label>
      <div  id="emailInputWarning" className="text-danger" />
    </div>
  )
  
}
   
export default InputEmail;