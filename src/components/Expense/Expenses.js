import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
        <ExpensesList expenses = {filteredExpenses}/>
    </div>
    </div>
    );
}
export default Expenses;