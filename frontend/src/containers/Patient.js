import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

import Calendar from "../components/Calendar";
import LedgerLogo from '../components/logo.png';


class CustomLayout extends React.Component {

  state = {
    token : localStorage.getItem(`token`),
    userinfo: []
}

componentDidMount = () => {
    fetch('http://localhost:8000/rest-auth/user/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${this.state.token}`
    },
        body: JSON.stringify(this.state.credentials)
    })
    .then (data => data.json())
    .then(
        data => {
            this.setState({userinfo: data})
        }
    ).catch(error => console.error(error))
}

  render() {
    const { token } = this.props;
    const { authenticated } = this.props;
    if (!authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
            {authenticated ? (
              <Menu.Item header onClick={() => this.props.logout()}>
                Logout
              </Menu.Item>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                </Link>
              </React.Fragment>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid centered>
                <List link inverted style={{ fontSize: "3em" }}>
                  <ul> 
                    <div><span>Username: </span> {this.state.userinfo.username} </div>
                    <br/>
                    <br/>
                    <div><span>First Name: </span> {this.state.userinfo.first_name}</div>
                    <br/>
                    <br/>
                    <div><span>Last Name: </span> {this.state.userinfo.last_name}</div>
                    <br/>
                    <br/>
                    <div><span>Email: </span> {this.state.userinfo.email}</div>
                  </ul>
                </List>
            </Grid>
            <Divider inverted section />
            <Image
              centered
              rounded
              size="small"
              src={LedgerLogo}
            />

          </Container>
        </Segment>
        <Segment
          inverted
          style={{ margin: "5em 5em 0em", padding: "3em 3em" }}
        >
          <Grid centered>
            <Calendar/>
          </Grid>
        </Segment>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
