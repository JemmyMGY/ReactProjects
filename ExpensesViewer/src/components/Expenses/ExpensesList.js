import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  const filteredExpenses = props.filteredExpenses;

  if (filteredExpenses.length === 0) {
    return (
      <div className="expenses-list__fallback">
        No Expenses found in {props.selectedYear}{" "}
      </div>
    );
  }
  return (
    <Card>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.key}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesList;
