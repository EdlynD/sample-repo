import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const expense = props.items;

  return (
    <div className="expenses">
      {expense.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
