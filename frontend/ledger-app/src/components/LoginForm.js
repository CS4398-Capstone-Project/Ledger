import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./UserStore";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }

    this.setState({
      buttonDisabled: true,
    });

    try {
      let res = await fetch("127.0.0.1:8000/api/auth/token/login/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "password": this.state.password,
          "username": this.state.username,
        }),
      });
/*
    try {
      // This will pull the login for a user that is running the backend localy
      let res = await fetch("127.0.0.1:8000/api/auth/token/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "password": this.state.password,
          "username": this.state.username,
        })
      }).then((resp) => {
        if(resp.state === 200) {
          this.setState({success: true});
        } return resp.json();
      }).then((resp) => {
        if(this.state.success) {
          this.props.setToken("Token " + resp.auth_token)
        } else {
          let str = JSON.stirgify(resp)
          let finalMessage = str.replace(/{|},|}/g, "\n").replace(/\[|\]|/g, "").replace(/,/g, ',\n')
          console.log(resp);
          this.setState({errorMessage: finalMessage});
        }
      }).catch((error) => {
        console.log(error, "Login try-catch failure");
      });
*/

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        UserStore.userID = result.id;
        UserStore.userPermissions = result.permission;
      } else if (result && result.sucess === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  async doSignUp() {}

  render() {
    return (
      <div className="loginForm">
        Login
        <InputField
          type="text"
          placeholder="Username"
          value={this.state.username ? this.state.username : ""}
          onChange={(val) => this.setInputValue("username", val)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={this.state.password ? this.state.username : ""}
          onChange={(val) => this.setInputValue("password", val)}
        />
        <SubmitButton
          text="Login"
          disabled={this.state.buttonDisabled}
          onClick={() => this.doLogin()}
        />
        <p>Not registered yet, Register Now</p>
        <Link to={`/registration`}>
          <Button text="SignUp" className='regBtn' > Register</Button>
        </Link>
      </div>
    );
  }
}
export default LoginForm;
