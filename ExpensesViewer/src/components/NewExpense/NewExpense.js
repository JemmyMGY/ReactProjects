import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [viewForm, setViewForm] = useState(false);
  const catchExpnseDataHandler = (expenseData) => {
    const savedData = {
      ...expenseData,
      key: Date.now()
    } 
    props.onReceiveNewExpense(savedData);
    cancelFormHandler();
  };

  const cancelFormHandler = () => {
    setViewForm(false);
  }

  const newExpenseClickHandler = () => { 
      setViewForm(true);
  };

  let formContent = (
    <button onClick={newExpenseClickHandler}>Add new Expense!</button>
  );

  if(viewForm === true){
    formContent = (
      <ExpenseForm
        onExpenseFormSubmit={catchExpnseDataHandler}
        onCancel={cancelFormHandler}
      />
    );
  }
  return (
    <div className="new-expense">
        {formContent}
    </div>
  );
};

export default NewExpense;
