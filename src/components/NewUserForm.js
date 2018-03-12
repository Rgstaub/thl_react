
import React, { Component } from 'react';
import './NewUserForm.css';
import InputEmail from './subcomponents/InputEmail.js';
import InputEmailConfirm from './subcomponents/InputEmailConfirm.js';
import InputPassword from './subcomponents/InputPassword.js';
import InputPasswordConfirm from './subcomponents/InputPasswordConfirm.js';
import SubmitButton from './subcomponents/SubmitButton.js';


class NewUserForm extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      username: "",
      email: "",
      emailConfirm: false,
      battlenetId: "",
      password: "",
      passwordConfirm: false,
      ready: true,
    }
  }

  returnValue = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  checkReady = () => {
    if (
      this.state.email && this.state.emailConfirm &&
      this.state.password && this.state.passwordConfirm &&
      this.state.battlenetId && this.state.username
    ) {
    this.setState({ ready: true });
  } else {
    this.setState({ ready: false});
  }

  submitNewUser = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      username: "JediNinja",
      bnetId: "Jedi1"
    }
    fetch('localhost:3001/public/register', {
      body: JSON.stringify(data),
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then( response => {
      console.log(response);
    }).catch( err => console.log(err));
  }

  render = () => {
    return (
      <div>
        <form className="text-left container-fluid">  
          <InputEmail returnValue={this.returnValue} />
          <InputEmailConfirm emailToMatch={this.state.email} returnValue={this.returnValue} />
          <InputPassword returnValue={this.returnValue} />
          <InputPasswordConfirm passwordToMatch={this.state.password} returnValue={this.returnValue} />
          <SubmitButton submit={this.submitNewUser} ready={this.state.ready} >Register</SubmitButton>
        </form>
      </div>
    )
  }
}

export default NewUserForm;
