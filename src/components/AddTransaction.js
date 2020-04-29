import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addTransaction, calculateIncome, calculateExpense} from '../actions/action';
import '../styles/addTransaction.css';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();

    const nameInput = useRef(null);
    const valueInput = useRef(null);

    useEffect(() => {
        nameInput.current.focus();
    }, [])

    const handleName = (e) => {
        let input = e.target.value;
        if (input) {
            setText(input);
        }
    };

    const handleAmount = (e) => {
        let input = e.target.value;
        if(input) {
            setAmount(input);
        }
    };

    const onFirstEnter = e => {
        if (e.keyCode === 13 && text !== '') {
            valueInput.current.focus();
        }
    };

    const onSecondEnter = e => {
        let parsedAmount = parseFloat(amount);

        if(e.keyCode === 13 && amount !== '') {
            dispatch(addTransaction(text, amount));
            if (parsedAmount >= 0) {
                dispatch(calculateIncome(parsedAmount));
            } else if (parsedAmount < 0) {
                dispatch(calculateExpense(parsedAmount))
            }
            setText('');
            setAmount('');
            nameInput.current.focus();
    }};

    return (
        <div className="input__wrapper">

            <input
                ref={nameInput}
                className="input__item"
                type="text"
                placeholder="add transaction"
                onChange={handleName}
                onKeyDown={onFirstEnter}
                value={text}
            />
            <input
                ref={valueInput}
                className="input__amount"
                type="number"
                placeholder="amount"
                onChange={handleAmount}
                onKeyDown={onSecondEnter}
                value={amount}
            />

        </div>
    )
}

export default AddTransaction;
