import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransReducer'

const initialTransactions = [
    
]


export const TransactionContext = createContext();

export const TransactionProvider = ({children}) => { 
const initialState = {
    transactions: [],
    income:0,
    expense:0,
}
    let [state, dispatch] = useReducer(TransactionReducer,initialState );

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                description: transObj.description 
            },
        });
    }


    function removeTransaction(transaction){
        dispatch({type:"REMOVE_TRANSACTION",payload:transaction}); 
    }


    return(
        <TransactionContext.Provider value= { 
            {
                transactions: state.transactions,
                income:state.income,
                expense:state.expense,
                addTransaction,
                removeTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}