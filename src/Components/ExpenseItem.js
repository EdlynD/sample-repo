import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  return (
    <div>
      {expenses.map((item, index) => (
        <div key={index} className="expense-item-container">
          <div className="date-container">
            <div>{item.date.toLocaleString("en-US", { month: "long" })}</div>
            <div>{item.date.toLocaleString("en-US", { day: "2-digit" })}</div>
            <div>{item.date.getFullYear()}</div>
          </div>
          <div className="expense-item-description">
            <h2>{item.title}</h2>
          </div>
          <div className="expense-item-price">{item.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
