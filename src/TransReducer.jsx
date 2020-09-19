

const TransactionReducer = ((state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION" : {
           
            return {
                ...state,
                transactions:[ action.payload, ...state.transactions],
                expense: action.payload.amount < 0 ? state.expense + action.payload.amount : state.expense,
                income: action.payload.amount > 0 ? state.income + action.payload.amount:state.income,
            }
        }
        case "REMOVE_TRANSACTION":
            
            return {
                ...state,
                transactions: state.transactions.filter((transaction,index) => index!== action.payload.id),
                expense: action.payload.amount < 0 ? state.expense - action.payload.amount:state.expense,
                income: action.payload.amount > 0 ? state.income - action.payload.amount:state.income,
            }
        default:
            return state;

    }
})

export default TransactionReducer;