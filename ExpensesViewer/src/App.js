import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const newExpenseHandler = (newExpenseObj) => {
    setExpenses( prevExpenses => {
      return [newExpenseObj, ...prevExpenses]; 
    });
  };

  return (
    <div>
      <NewExpense onReceiveNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
