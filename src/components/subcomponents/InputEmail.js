import React from 'react';

const InputEmail = (props) => {



   const handleChange = (e) => {

    console.log(e.target.value);
    if ( this.validateEmail(e.target.value).valid ) {
      console.log("valid email string");
    }
  }
  
  const validateEmail = (email) => {
    // eslint-disable-next-line
    const regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
    if (regEx.test(email)) {
      return {
        valid: true,
        value: email
      } 
    }
    else {
      return {
        valid: true,
        value: email
      }
    }
  }

  const render = () => {
    return (
      <div>
        <input type="text" name="email" 
          onChange={this.handleChange}/>
      </div>
    )
  }

}
   

export default InputEmail;