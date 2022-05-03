import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
  const [selectedYear, setSelectedYear] = useState(props.year);
    return (<div>
      <ExpensesFilter value = {selectedYear}/>
        <div className='expenses'>
      <ExpenseItem 
      title={props.expenses[0].title} date={props.expenses[0].date} price={props.expenses[0].price}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.expenses[1].title} date={props.expenses[1].date} price={props.expenses[1].price}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.expenses[2].title} date={props.expenses[2].date} price={props.expenses[2].price}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.expenses[3].title} date={props.expenses[3].date} price={props.expenses[3].price}>
      </ExpenseItem>
    </div>
    </div>
    );
}
export default Expenses;