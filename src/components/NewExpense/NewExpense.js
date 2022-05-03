import './NewExpense.css';
import ExpenseForm from './ExpenseForm'; 

const NewExpense =(props) =>{
    const saveDataHandler = (enteredData) =>{
        const newData =  {
            ...enteredData,
            id: Math.random.toString
        };
       props.onSaveNewData(newData);
    };
    return (<div className='new-expense'>
        <ExpenseForm onSaveData={saveDataHandler}/>
    </div>);
};

export default NewExpense;