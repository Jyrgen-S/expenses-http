import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 0, 19),
      title: "New book",
      price: 30.99,
    },
    {
      date: new Date(2024, 0, 19),
      title: "New jeans",
      price: 99.99,
    },
  ];
  /*const date = new Date(2023, 9, 6);
  const title = "New book";
  const price = 30.99;*/
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
