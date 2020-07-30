import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";

const Customer = () => {
  return (
    <>
      <Navbar />
      <section id="about">
        <div className="about-text">
          <span> Account Info</span>
          <br />
          <div className="accountSec">
            <ul>Full Name:</ul>
            <ul>eMail:</ul>
            <ul>Phone Number:</ul>
            <ul>Next Appoitment:</ul>
          </div>
        </div>
        <div className="about-text">
          <span>Features</span>
          <br />
          <div className="accountSec" >
            <ul>
              <button className="btn btn-outline-success ">
                Make an Appt.
              </button>
            </ul>
            <br />
            <ul>
              <button className="btn btn-outline-success ">View Appts.</button>
            </ul>
          </div>
        </div>
      </section>

      <section className="calendarSec">
      <Calendar/>
      </section>
    </>
  );
};

export default Customer;
