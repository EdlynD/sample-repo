import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Card className="expense-item-container">
      <div className="date-container">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item-price">${props.amount}</div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
