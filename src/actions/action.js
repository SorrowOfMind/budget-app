export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const INCOME = 'INCOME';
export const EXPENSE = 'EXPENSE';

export const addTransaction = (text, amount) => {
    return {
        type: ADD_TRANSACTION,
        payload: {
            text: text,
            amount: amount
        }
    }
};

export const calculateIncome = (amount) => {
    return {
        type: INCOME,
        payload: amount
    }
};

export const calculateExpense = (amount) => {
    return {
        type: EXPENSE,
        payload: amount
    }
}
