import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
  const [filteredYear,setFilteredYear] = useState("2022");

  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear});

  const selectDataHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

    return (<div>
        <div className='expenses'>
        <ExpensesFilter selected = {filteredYear} onSelectYear = {selectDataHandler}/>
        {filteredExpenses.map(expense => <ExpenseItem key = {expense.id}
        title={expense.title} date ={expense.date} price = {expense.price} />)}
    </div>
    </div>
    );
}
export default Expenses;