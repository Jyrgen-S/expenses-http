import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
/*import ExpenseItem from "./ExpenseItem";*/
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  console.log(props.expenses);
  const [filteredYear, setFilteredYear] = useState("2023");

  console.log("Year data in expenses " + filteredYear);

  const filterChangeHandler = (year) => {
    console.log("Filter change handled handled by Expenses.js");
    console.log(year + " in Expenses.js");
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  /* let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem expenseData={expense} key={expense.id} />;
    });
  } */

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList
        filteredExpenses={filteredExpenses}
        isLoading={props.isLoading}
      ></ExpensesList>
    </Card>
  );
};

export default Expenses;
