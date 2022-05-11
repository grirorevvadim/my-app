import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props => {
    if(props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback"> There are no items.</h2>
    }

    if(props.expenses.length > 0)
    { return <ul className="expenses-list"> {props.expenses.map(expense => <ExpenseItem key = {expense.id}
    title={expense.title} date ={expense.date} price = {expense.price} />)}
    </ul>}
};

export default ExpensesList;