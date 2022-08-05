import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import formHelper from "../Utils/FormHelper";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const { list, setList } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const onChangeHandler = (e, name) => {
    switch (name) {
      case "title":
        console.log(e);
        setTitle(e);
        break;
      case "amount":
        console.log(e);
        setAmount(e);
        break;
      case "date":
        console.log(e);
        setDate(e);
        break;
    }
  };

  const onSubmitHandler = () => {
    const newList = [...list, { title: title, amount: amount, date: date }];
    setList(newList);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense-controls">
          {formHelper.map((form, index) => (
            <div key={index} className={form.className}>
              <label>{form.title}</label>
              <input
                name={form.name}
                onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                type={form.type}
              />
            </div>
          ))}
        </div>
        <div className="new-expense-action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
