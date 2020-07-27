import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
 state = {
        credentials: {username: '', password: ''},
        islogin: false, from: '',
    }
    login = event => {
        console.log('login here');

        fetch('http://localhost:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then (data => data.json())
        .then(
            data => {
                localStorage.setItem('token', data) // saving token to be used by other componenets if needed
            }
          )
          .then(
              this.setState({islogin : true})
           )
        .catch(error => console.error(error))
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value; 
        this.setState({credentials: cred});
    }

    renderRedirect = () => {
      if (this.state.islogin) {
      return <Redirect to='./Customer' /> }
      
    }
    render() {
      return (
          <div>
              <h1> Login user</h1>

              <label>
                  username:
                  <input type="text" name = "username" 
                  value={this.state.credentials.username}
                  onChange={this.inputChanged}/>
              </label>
              <br/>
              <label>
                  password:
                  <input type="text" name = "password" 
                  value={this.state.credentials.password}
                  onChange={this.inputChanged}/>
              </label>
              <br/>
              <br/>
              <button as="Loginbutton" onClick={this.login}>Login</button>
              <br/>
              <br/>
              <button onClick={this.register}>Register</button>
              {this.renderRedirect()}

          </div>

      );
  }
}
export default LoginForm;