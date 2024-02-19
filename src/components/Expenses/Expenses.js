import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const filterChangeHandler = (filteredYear) => {
    console.log("Year data in Expenses.js " + filteredYear);
  };
  /*
  props.expenses.map((expense) => {
    console.log(expense);
  });
  /* const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    <ExpensesFilter
      selectedYear={selectedYear}
      onYearChange={handleYearChange}
    />;

    return expense.date.getFullYear().toString() === selectedYear;
  });*/

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {props.expenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </Card>
    /*
    <Card className="expenses">
      <ExpensesFilter onYearChange={handleYearChange} />
      <ExpenseItem expenseData={props.expenses[0]} />
      <ExpenseItem expenseData={props.expenses[1]} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseData={expense} />
      ))} 
    </Card> */
  );
};

export default Expenses;
