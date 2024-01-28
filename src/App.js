import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const date = new date(2023, 9, 6);
  const title = "New book";
  const price = 30.99;
  return (
    <div className="App">
      <ExpenseItem date={date} title={title} price={price} />
    </div>
  );
}

export default App;
