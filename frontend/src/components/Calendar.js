
import React, { Component } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  TimelineViews,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { extend, Internationalization } from "@syncfusion/ej2-base";

export default class Calendar extends Component {
  constructor() {
    super(...arguments);
    this.instance = new Internationalization();
  }
  majorSlotTemplate(props) {
    return (
      <div style={{ textAlign: "center", fontWeight:'bolder'}}>{this.instance.formatDate(props.date, { skeleton: "hm" })}</div>
    );
  }
  minorSlotTemplate(props) {
    return (
      <div style={{ textAlign: "right", marginRight: "15px" }}>
        {this.instance
          .formatDate(props.date, { skeleton: "ms" })
          .replace(":00", "")}
      </div>
    );
  }
  render() {
    return (
      <ScheduleComponent
        width="80%"
        height="950px"
        startHour='7:00'
        endHour='19:60' 
        timeScale={{
          enable: true,
          interval: 60,
          slotCount: 4,
          majorSlotTemplate: this.majorSlotTemplate.bind(this),
          minorSlotTemplate: this.minorSlotTemplate.bind(this),
        }}
        showTimeIndicator={false}
      >
        <ViewsDirective>
        <ViewDirective option="WorkWeek" />
          <ViewDirective option="Day" />
          <ViewDirective option="TimelineWorkWeek"         timeScale={{
          enable: true}} />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
      </ScheduleComponent>
    );
  }
}
