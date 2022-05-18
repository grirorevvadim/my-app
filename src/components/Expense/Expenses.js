import React, {useState} from 'react';
import './Expenses.css';
import ExpenseChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props){
  const [filteredYear,setFilteredYear] = useState("2022");

  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear});

  const selectDataHandler = (year) => {
    setFilteredYear(year);
  };

    return (<div>
        <div className='expenses'>
        <ExpensesFilter selected = {filteredYear} onSelectYear = {selectDataHandler}/>
        <ExpenseChart expenses = {filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses}/>
    </div>
    </div>
    );
}
export default Expenses;