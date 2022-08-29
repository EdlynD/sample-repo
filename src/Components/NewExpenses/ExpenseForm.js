import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import formHelper from "../Utils/FormHelper";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { list, setList } = useContext(ExpenseContext);

  const [newList, setNewList] = useState({
    id: "",
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e, name) => {
    if (name === "date") {
      setNewList({ ...newList, id: Math.random(), [name]: new Date(e) });
    } else if (name === "amount") {
      setNewList({ ...newList, id: Math.random(), [name]: +e });
    } else {
      setNewList({ ...newList, id: Math.random(), [name]: e });
    }
  };

  const onSubmitHandler = (e) => {
    setList([...list, newList]);
    e.target.reset();
    e.preventDefault();
  };

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
                required
              />
            </div>
          ))}
        </div>
        <div className="new-expense-action">
          <button className="Cancel" type="button" onClick={props.onClickNot}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
