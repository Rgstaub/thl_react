
import React, { Component } from 'react';
import './NewUserForm.css';
import InputEmail from './subcomponents/InputEmail.js';
import InputEmailConfirm from './subcomponents/InputEmailConfirm.js';
import InputPassword from './subcomponents/InputPassword.js';
import InputPasswordConfirm from './subcomponents/InputPasswordConfirm.js';
import SubmitButton from './subcomponents/SubmitButton.js';
import InputBnetId from './subcomponents/InputBnetId.js'


class NewUserForm extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      username: "JediNinja4",
      email: "",
      emailConfirm: false,
      bnetId: "",
      password: "",
      passwordConfirm: false,
      messages: []
    }
  }

  collectInputValue = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  submitNewUser = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      username: "JediNinja207",
      bnetId: this.state.bnetId
    }
    fetch('/public/register', {
      body: JSON.stringify(data),
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then( response => {
      response.json().then( res => {
        console.log(res);
        res.err ?
          this.setState({messages: res.err})
          : this.setState({messages: [`User ${res.username} has been successfully created`]})
      })
    })
  }

  render() {
    let ready;
    if (
      this.state.email && this.state.emailConfirm &&
      this.state.password && this.state.passwordConfirm &&
      this.state.bnetId && this.state.username
    ) {
      ready = true;
    } else {
      ready = false;
    }

    return (
      <div>
        <form className="text-left container-fluid">  
          <InputEmail returnValue={this.collectInputValue} email={this.state.email} />
          <InputEmailConfirm emailToMatch={this.state.email} returnValue={this.collectInputValue} />
          <InputPassword returnValue={this.collectInputValue} />
          <InputPasswordConfirm passwordToMatch={this.state.password} returnValue={this.collectInputValue} />
          <InputBnetId returnValue={this.collectInputValue} />
          <SubmitButton submit={this.submitNewUser} ready={ready} >Register</SubmitButton>
          {this.state.messages.map( (error, index) => {
            return <p key={index}>{error}</p>
          })}
        </form>
      </div>
    )
  }
}

export default NewUserForm;
