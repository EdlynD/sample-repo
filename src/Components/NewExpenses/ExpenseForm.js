import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import formHelper from "../Utils/FormHelper";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const { list, setList } = useContext(ExpenseContext);

  const [newList, setNewList] = useState({
    id: Math.random(),
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e, name) => {
    setNewList({ ...newList, [name]: e });
  };

  const onSubmitHandler = (e) => {
    setList([...list, newList]);
    e.preventDefault();
  };
  console.log(list);

  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
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
