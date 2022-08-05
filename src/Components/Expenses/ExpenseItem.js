import React, { useState, useContext } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const handleOnClick = () => {
    const newTitle = "New Lamesa mamaltuk";
    setTitle(newTitle);
  };
  return (
    <Card className="expense-item-container">
      <div className="date-container">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item-description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item-price">${props.amount}</div>

      <button onClick={handleOnClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
