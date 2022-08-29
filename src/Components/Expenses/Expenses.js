import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../Context/ExpenseContext";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {
  const { list, setList } = useContext(ExpenseContext);
  const [filteredYear, setFilteredYear] = useState("2020");

  const onClick = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };

  const onChangeFilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = list.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={onChangeFilterYear}
        />
        <ExpensesChart expenses={filteredList} />

        {filteredList.length === 0 ? (
          <p className="sample">No Expenses found</p>
        ) : (
          filteredList.map((item, index) => (
            <div className="expenseItem" key={index}>
              <ExpenseItem
                className="item"
                id={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
              <button onClick={() => onClick(item.id)}>Delete</button>
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
