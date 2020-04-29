import {ADD_TRANSACTION, INCOME, EXPENSE} from '../actions/action';

const initialState = {
    transactions: [],
    totalIncome: 0,
    totalExpense: 0
};

const rootReducer = (state=initialState, action) => {
    if (action.type === ADD_TRANSACTION) {
        return {
            ...state,
            transactions: [
                ...state.transactions,
                {
                text: action.payload.text, 
                amount: action.payload.amount
            }]
        }
    }
    if (action.type === INCOME) {
        return {
            ...state,
            totalIncome: state.totalIncome + action.payload
        }
    }

    if (action.type === EXPENSE) {
        return {
            ...state,
            totalExpense: state.totalExpense + action.payload
        }
    }

    return state;
};

export default rootReducer;