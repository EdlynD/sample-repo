import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import expenses from "./Components/Utils/ListExpenses";
import { ExpenseContext } from "./Components/Context/ExpenseContext";
import Login from "./Components/Login/Login";

function App() {
  const [list, setList] = useState(expenses);
  const [isLogin, setisLogin] = useState(false);

  return (
    <ExpenseContext.Provider value={{ list, setList, isLogin, setisLogin }}>
      {!isLogin ? (
        <Login />
      ) : (
        <>
          <NewExpense />
          <Expenses />
        </>
      )}
    </ExpenseContext.Provider>
  );
}

export default App;
