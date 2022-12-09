import Calendar from "react-calendar";
import { useState } from "react";
import "./Calendar.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Time from "../Time/Times";
import { useContext } from "react";
import { ThemeContext } from "../App/App";

const CalendarComp = () => {
  const [date, setDate] = useState(new Date());
  const [showTime] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "white" : "black",
    color: darkTheme ? "black" : "white",
  };
  console.log(date);
  return (
    isAuthenticated && (
      <div>
        <div className="header-container" style={themeStyles}>
          <h1 className="header">{user.given_name}'s Calendar</h1>
        </div>
        <div className="calendar-parent">
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} selectRange={true} />
          </div>
          {date.length > 0 ? (
            <p>
              <span>Start:</span> {date[0].toDateString()}
              &nbsp; to &nbsp;
              <span>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Default selected date:</span> {date.toDateString()}
            </p>
          )}
          <Time showTime={showTime} date={date} />
        </div>
      </div>
    )
  );
};

export default CalendarComp;
