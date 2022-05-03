import './ExpenseItem.css';
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  const clickHandler = ()=>{
    setTitle('Updated');
    console.log('button is clicked');
  };
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>
          <h2>{props.price}$</h2>
        </div>
      </div>
      <button onClick={clickHandler}>
        Change title
      </button>
    </div>
  );
}

export default ExpenseItem;
