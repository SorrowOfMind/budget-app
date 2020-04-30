import React from 'react';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import '../styles/balance.css';

const Balance = () =>{
    const balance = useSelector(state => state.totalIncome + state.totalExpense)
    return (
        <div className="balance">
            <h2 className="balance__title">BALANCE:<p className={balance > 0 ? "balance__amount positive" : balance < 0 ? "balance__amount negative" : "balance__amount"}>{balance}</p></h2>
        <div className="balance__indicator">{balance > 0 ? <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up"/> : balance < 0 ? <FontAwesomeIcon icon={faThumbsDown} className="thumbs-down"/> : null}</div>
        </div>
    )
    
}

export default Balance
