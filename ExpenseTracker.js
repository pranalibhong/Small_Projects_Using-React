import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [input,setInput] =useState('');
    const[amount,setAmount] =useState('');
    const [expenses,setExpenses] =useState([]);

    const addExpense=()=>{
        if (!input|| !amount) return;

        // for fetch the item details we create array of object
        const newExpenses ={           
            id:expenses.length+1,
            title:input,
            amount:amount
        };
        // after buttonClick set expenses addd a new value
        setExpenses([...expenses, newExpenses])
        setInput('')
        setAmount('')
        // empty the input and amount field  after button click
    }

    const deleteExpense= (id) =>{
        setExpenses(expenses.filter((expenses) => expenses.id!== id))
    }
    
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <input type='text' placeholder='expense' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <input type='number' placeholder='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        <button onClick={addExpense}>Add Expense</button>
      </div>
      {/* for show the output below the button  create list and for that use map() to iterate through list */}
      <ul className='expense-list'>{
        expenses.map((expense) =>(
            <li key={expense.id}>
                <span>{expense.id}</span>
                <span>{expense.title}</span>
                <span>{expense.amount}</span>
                <button onClick={()=> deleteExpense(expense.id)}>Delete</button>
            </li>
        ))


        }
        

      </ul>


    </div>
  )
}

export default ExpenseTracker
