import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, EventSettingsModel } from '@syncfusion/ej2-react-schedule'

function App() {
  const data = [{
    Id: 1,
    Subject: 'Meeting - 1',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 16, 12, 30),
    IsAllDay: false
  }]

  return (
    <div className="App">
      <ScheduleComponent currentView='Week' selectedDate= {new Date()} eventSettings={ { dataSource: data } }  >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineMonth, MonthAgenda, TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;

