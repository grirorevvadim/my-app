import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
        <div>
      <ExpenseItem 
      title={props.expenses[0].title} date={props.expenses[0].date} price={props.expenses[0].price}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.expenses[1].title} date={props.expenses[1].date} price={props.expenses[1].price}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.expenses[2].title} date={props.expenses[2].date} price={props.expenses[2].price}>
      </ExpenseItem>
    </div>
    );
}
export default Expenses;