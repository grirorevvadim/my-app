import React, {useState} from 'react';
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
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
    date: new Date(2021, 0, 31),
  },
  {
    id: "e4",
    title: "fooooooood",
    price: 1000,
    date: new Date(2022, 0, 31),
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const newDataHandler = (enteredData) =>{
    console.log(enteredData);
    setExpenses((prevExpenses) =>{ 
      return [enteredData,...prevExpenses]});
  };

  
  return (<div>
    <NewExpense onSaveNewData ={newDataHandler}/>
    <Expenses expenses={expenses}></Expenses>;
</div>);
}

export default App;
