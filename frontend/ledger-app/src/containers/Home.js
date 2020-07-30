import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import LedgerLogo from '../components/logo.png';
import SubLogo1 from '../components/logo3.png';
import SubLogo2 from '../components/logo4.png';

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Business Thrive
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Ledger can make scheduling easy for your business. 
              Let us take over thetake the hassel of client appointments and 
              work schedule management.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Schedule Management is Easier with Ledger.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              From employee schedules to client appointments.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              rounded
              size="large"
              src={LedgerLogo}
            />
            <span>Middle Aligned</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
           ANOTHER SPACE FOR QUOTES ETC....
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Ledger gave me more time to focus on my customers, and the service they are getting, on and off site."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image 
              size = "medium" 
              src={SubLogo1} 
              right />
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
        What can Ledger do for You?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
        Ledger will allow any business to make scheudling simple and easy. 
        Our product will allow you to integrate employee scheduling and customer 
        scheduling. User friendly interaces for administrative purposes and clients 
        will allow schedule management to be fast.
        </p>
 
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">---------</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
        Reliable • User-Friendly • Secure
        </Header>
        <Image 
              size = "large" 
              src={SubLogo2} 
              right />
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
