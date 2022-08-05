import React, { useContext } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../Context/ExpenseContext";
import "./Expenses.css";

const Expenses = () => {
  const { list } = useContext(ExpenseContext);

  return (
    <Card className="expenses">
      {list.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
