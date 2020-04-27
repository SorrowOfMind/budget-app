import React from 'react';
import '../styles/addTransaction.css';

const AddTransaction = () => {
    return (
        <div className="input__wrapper">
            <input className="input__item" type="text" placeholder="add transaction"/>
            <input className="input__amount" type="number" placeholder="amount"/>
        </div>
    )
}

export default AddTransaction;
