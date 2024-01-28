import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log(props);
  const date = new date(2023, 9, 6);
  const title = "New book";
  const price = 30.99;
  return (
    <div className="expense-Item">
      <div>Date</div>
      <div className="expense-item__description"></div>
      <h2>Title</h2>
      <div className="expense-item__price">
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
