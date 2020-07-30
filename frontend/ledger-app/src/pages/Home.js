import React from "react";
import { observer } from 'mobx-react';
import LoginForm    from  '../components/LoginForm';
import SubmitButton from  '../components/SubmitButton';
import logo from '../logo.png'
import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
      //isLoading: this.props.state.userIsLoading
    //}
}

  /* start writing the API codes we will need for the components we will define the methods and course guide*/
  
  async componentDidMount() {
  
    try {
      /*check if user is logged in or not by checking session*/
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      });
  
      let result = await res.json();
  
      if (result && result.success) {
        this.props.state.userIsLoading = false; /* user is logged in so they are in already*/
        this.props.state.userIsLoggedIn = true;
        this.props.state.username = result.username;
  
      }
  
      else {
        this.props.state.userIsLoading = false;
        this.props.state.userIsLoggedIn = false;
      }
  
    }
  
    catch(e) {
      //this.setState({isLoading: false});
      this.props.state.userIsLoggedIn = false;
      this.props.state.userIsLoggedIn = false;
    }
  }
  
  /*Defining Logout Function Below */
  
  async doLogout() {
    
    try {
      /*check if user is logged in or not by checking session*/
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      });
  
      let result = await res.json();
  
      if (result && result.success) {
        this.props.state.userIsLoggedIn = false; /*user has logged out*/
        this.props.state.username = '';
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  
  
  render() {
    if(this.props.state.userIsLoading) {
      return (
        <div className = "app">
          <div className = 'container'>
            {console.log("user loggin: " + this.props.state.userIsLoggedIn)}
            Loading, please wait...
          </div>
        </div>
      );
    }
    
    else {
  
      if(this.props.state.userIsLoggedIn) {
        return (
          <div className = "app">
            <div className = 'container'>
              Welcome {this.props.state.username}
  
              <SubmitButton 
                text = {'Log out'}
                disabled = {false}
                onClick = { () => this.doLogout() }
              />
  
            </div>
  
          </div>
        );
      }
  
      return (<>
        <div className="app">
          <div className= 'container'>
          <img src={logo}></img>
          <LoginForm state={this.props.state}/>
          </div>
  
       </div>
       </>
      );
    }
  
  }
  
  }
  export default observer(Home);
