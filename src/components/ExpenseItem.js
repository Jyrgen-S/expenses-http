import ExpenseDate from "../ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /*console.log(props.expenseData.date);*/
  const day = props.expenseData.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const month = props.expenseData.date.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.expenseData.date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-item__description"></div>
      <h2>{props.expenseData.title}</h2>
      <div className="expense-item__price">
        <div>{props.expenseData.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
