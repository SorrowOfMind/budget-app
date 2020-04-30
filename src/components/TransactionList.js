import React from 'react';
import {useSelector} from 'react-redux';
import "../styles/transactionList.css";

const TransactionList = () => {
    const transactions = useSelector(state => state.transactions);
    return (
        <div className="list-wrapper">
            <ul>
                {transactions.map((transaction, idx) => {
                    return (
                        <li key={idx} className="list-item">
                            <span className="list-number">{idx+1}. </span> 
                            {transaction.text} <span className={(transaction.amount >= 0) ? "list-amount positive" : "list-amount negative"}>{transaction.amount}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TransactionList;
