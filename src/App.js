import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import expenses from "./Components/Utils/ListExpenses";
import { ExpenseContext } from "./Components/Context/ExpenseContext";

function App() {
  const [list, setList] = useState(expenses);

  return (
    <ExpenseContext.Provider value={{ list, setList }}>
      <NewExpense />
      <Expenses items={list} />
    </ExpenseContext.Provider>
  );
}

export default App;
