import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div className="date-container">
      <div className="month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="year">{props.date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
