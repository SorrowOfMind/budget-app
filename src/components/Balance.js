import React, { Component } from 'react';
import '../styles/balance.css';

export class Balance extends Component {
    render() {
        return (
            <div className="balance">
                <h2 className="balance__title">BALANCE:<p className="balance__amount">0</p></h2>
                <div className="balance__indicator"></div>
            </div>
        )
    }
}

export default Balance
