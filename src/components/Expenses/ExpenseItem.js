import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseData.title);

  const clickHandler = () => {
    console.log("Clicked!");
    setTitle(`Updated by click ${title}`);
    console.log(title);
  };
  /*console.log(props.expenseData.date);
  const day = props.expenseData.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const month = props.expenseData.date.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.expenseData.date.getFullYear();*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseData.date} />
        <div className="expense-item__description">
          <h2>{props.expenseData.title}</h2>
          <div className="expense-item__price">
            $
            {props.expenseData.price
              ? props.expenseData.price.toFixed(2)
              : "0.00"}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
