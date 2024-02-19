import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onYearChange={filterChangeHandler}
      />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseData={expense} />
        ))
      ) : (
        <p>No expenses found for the selected year.</p>
      )}
    </Card>
  );
};

export default Expenses;
