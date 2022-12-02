import Calendar from "react-calendar";
import { useState } from "react";
import "./Calendar.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CalendarComp = () => {
  const [date, setDate] = useState(new Date());
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h1 className="header">My Calendar</h1>
        <div className="calendar-parent">
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div className="text-center">
            Selected date: {date.toDateString()}
          </div>
        </div>
      </div>
    )
  );
};

export default CalendarComp;
