import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm =(props) =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
            setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredData={
            title: enteredTitle,
            price:enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveData(enteredData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const cancelHandler = () =>{
        console.log("inside expense form");
        props.onCancel();
    };

return (<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>    
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' max='1000' step='0.01' value={enteredAmount} 
            onChange={amountChangeHandler}/>    
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2020-10-10' max='2030-10-10' value={enteredDate} onChange={dateChangeHandler}/>    
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
        <button onClick={cancelHandler}> Cancel </button>
    </div>
</form>);
};
export default ExpenseForm;