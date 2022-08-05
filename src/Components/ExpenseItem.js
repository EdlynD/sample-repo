import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <div className="expense-item-container">
        <div className="date-container">
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item-description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
