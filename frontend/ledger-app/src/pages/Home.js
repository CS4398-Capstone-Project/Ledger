import React from "react";
import { observer } from 'mobx-react';
import UserStore    from  '../components/UserStore';
import LoginForm    from  '../components/LoginForm';
import SubmitButton from  '../components/SubmitButton';
import logo from '../logo.png'
import '../App.css';

class Home extends React.Component {

  /* start writing the API codes we will need for the components we will define the methods and course guide*/
  
  async componentDidMount() {
  
    try {
      /*check if user is logined in or not by checking session*/
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      });
  
      let result = await res.json();
  
      if (result && result.success) {
        UserStore.loading = false; /* user is logged in so they are in already*/
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
  
      }
  
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
  
    }
  
    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
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
        UserStore.isLoggedIn = false; /*user has logged out*/
        UserStore.username = '';
      }
  
  
    }
  
    catch(e) {
      console.log(e)
    }
  }
  
  
  render() {
    if (UserStore.loading) {
      return (
        <div className = "app">
          <div className = 'container'>
            loading, please wait...
          </div>
        </div>
      );
    }
    
    else {
  
      if(UserStore.isLoggedIn) {
        return (
          <div className = "app">
            <div className = 'container'>
              Welcome {UserStore.username}
  
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
          <LoginForm/>
          </div>
  
       </div>
       </>
      );
    }
  
  }
  
  }
  export default observer(Home);
