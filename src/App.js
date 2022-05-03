import ExpensesFilter from "./components/Expense/ExpensesFilter";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const newDataHandler = (enteredData) =>{
    console.log('Inside app.js');
    console.log(enteredData);
  };

  const selectDataHandler = (selectedYear) => {
    console.log(selectedYear);
    year = selectedYear;
  };
  let year = '';
  const expenses = [
    {
      id: "e1",
      title: "food",
      price: 100,
      date: new Date(2022, 2, 2),
    },
    {
      id: "e2",
      title: "car repair",
      price: 500,
      date: new Date(2022, 1, 5),
    },
    {
      id: "e3",
      title: "travelling",
      price: 1000,
      date: new Date(2022, 0, 31),
    },
    {
      id: "e4",
      title: "fooooooood",
      price: 1000,
      date: new Date(2022, 0, 31),
    },
  ];
  return (<div>
    <NewExpense onSaveNewData ={newDataHandler}/>
    <ExpensesFilter onSelectYear = {selectDataHandler}/>
    <Expenses year = {year} expenses={expenses}></Expenses>;
</div>);
}

export default App;
