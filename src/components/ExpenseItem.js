import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

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
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-item__description"></div>
      <h2>{props.expenseData.title}</h2>
      <div div className="expense-item__price">
        {props.expenseData.price}
      </div>
    </Card>
  );
}

export default ExpenseItem;
