import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  const catchYearReceived = (yearValue) => {
    setSelectedYear(yearValue);
  };

  return (
    <Card className="expenses">
      {/* <ExpensesChart /> */}

      <ExpensesFilter
        updatedYear={selectedYear}
        onYearReceived={catchYearReceived}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        filteredExpenses={filteredExpenses}
        selectedYear={selectedYear}
      />
    </Card>
  );
}

export default Expenses;
