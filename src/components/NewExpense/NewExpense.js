import './NewExpense.css';
import react, {useState} from 'react';
import ExpenseForm from './ExpenseForm'; 

const NewExpense =(props) =>{
    const [showForm,setShowForm] = useState(false);

    const addDataHandler = () => {
        setShowForm(!showForm);
    }
    const saveDataHandler = (enteredData) =>{
        if(enteredData===null){
            setShowForm(!showForm);
        }
        else{
        const newData =  {
            ...enteredData,
            id: Math.random.toString
        };
       props.onSaveNewData(newData);}
    };
    return (<div className='new-expense'>
{   !showForm && <button onClick={addDataHandler}> Add new expense</button>}
{   showForm && <ExpenseForm onSaveData={saveDataHandler} onCancel ={addDataHandler}/>}
    </div>);
};

export default NewExpense;