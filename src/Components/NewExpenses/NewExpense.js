import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const isEditing = () => {
    setIsFormVisible(true);
  };
  const isNotEditing = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseForm onClickNot={isNotEditing} />
      ) : (
        <button className="add-new-expense" onClick={isEditing}>
          Add New Expenses
        </button>
      )}
    </div>
  );
};

export default NewExpense;
