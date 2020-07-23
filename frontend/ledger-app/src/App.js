import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

// Import all the pages
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Registration from "./pages/Registration";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Users information goes here.
    }
  };

  render() {
    return(
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/customer' component={Customer} />
        <Route exact path='/employee' component={Employee} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/registration' component={Registration} />

        {/* <Route component={Error} /> */}
{/*
      <div className="App">
        <ScheduleComponent currentView='Week' selectedDate= {new Date()} eventSettings={ { dataSource: data } }  >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineMonth, MonthAgenda, TimelineViews, TimelineMonth]} />
        </ScheduleComponent>
      </div>
*/}
      </div>
    );
  }
}

export default App;
