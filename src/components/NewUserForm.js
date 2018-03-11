'strict';

import React, { Component } from 'react';
import './NewUserForm.css';
import InputEmail from './subcomponents/InputEmail.js'

class NewUserForm extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      username: "",
      email: "",
      battlenetId: "",
      password: "",
      passwordConfirm: "",
      ready: false,
    }
  }

  returnValue = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    // eslint-disable-next-line
    switch(field) {
      case "email":
        this.setState({ email: value }, () => this.checkReady());
        break;
      case "username":
        this.setState({ username: value }, () => this.checkReady());
        break;
      case "battlenetId":
        this.setState({ battlenetId: value }, () => this.checkReady());
        break;
      case "password":
        this.setState({ password: value }, () => this.checkReady());
        break;
      case "passwordConfirm":
        this.setState({ passwordConfirm: value }, () => this.checkReady())
    } 
  }

  validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    this.setState({ emailMessage: ""});
    if (re.test(email)) {
      return true;
    } else {
      this.setState({ emailMessage: "Invalid email address"});
      return false;
    }
  }

  validatePassword(password) {
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    if (passwordRegex.test(password)) {
      this.setState({ passwordMessage: ""});
      return true;
    } else {
      this.setState({ passwordMessage: "Passwords must be at least 6 characters long, and include at least one capital letter and one number"});
      return false;
    }
  }

  validatePasswordConfirm(passwordConfirm) {
    if (passwordConfirm === this.state.password) {
      this.setState({ passwordConfirmMessage: "" });
      return true
    } else {
      this.setState({ passwordConfirmMessage: "Passwords do not match"});
      return false
    }
  }

  checkReady() {
    if (this.state.username &&
      this.state.email &&
      this.state.password &&
      this.state.passwordConfirm &&
      this.state.battlenetId
    ) {
      if (this.validateEmail(this.state.email) &&
          this.validatePassword(this.state.password) &&
          this.validatePasswordConfirm(this.state.passwordConfirm)
      ) {
        this.setState({ ready: true});
      } else {
        this.setState({ ready: false });
      }
    } else {
      this.setState({ ready: false });
    }
  }

  submitForm(event) {
    event.preventDefault();
    
    this.props.onNewUserSubmit(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        battlenetId: this.state.battlenetId
      }
    )
  }

  render() {
    return (
      <div>
        {this.state.email}
        <InputEmail
          returnValue={this.returnValue} 
        />
      </div>
    );
  }
}

export default NewUserForm;
