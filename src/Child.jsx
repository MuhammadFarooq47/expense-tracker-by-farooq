import React, { useContext, useState } from 'react';
import {TransactionContext} from './TransContext';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Child = () => {

   let transactions = useContext(TransactionContext);
   let {addTransaction, removeTransaction, transactions : t,expense,income} = transactions; 
   console.log(addTransaction)

   let [newDesc, setDesc] = useState("");
   let [newAmount, setAmount] = useState("");

   const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0){
            alert("Please enter correct amount")
            return false
        }

      const netTrans =
          { 
            amount: Number(newAmount),
            description: newDesc
        }

        addTransaction(netTrans) 

        setDesc("");
        setAmount("");
        
        
   } 

   
    return (
        <>
            <div className="container">
                <h1 className='text_center'> Exp.Tracker by M.Farooq </h1>
               
                <h3 className="balance"> Your Balance <br /> ${income + expense}.00 </h3>

                <div className='expense_container'>
                   
                    <h3 className='income'>Income <br /> ${income}.00 </h3>
                    
                 
                    <h3 className='expense'>Expense <br /> ${expense}.00 </h3>
                </div>
                <h3 className='h3'> Transaction History </h3>
                <hr />

                <ul className='transaction_list'>

                    {t.map((transVal, index) => {
                        return (
                            <li key= {index} id='list'>
                                <span onClick={()=> removeTransaction({...transVal,id:index})} > <HighlightOffIcon /> </span>
                                <span> {transVal.description} </span>
                                <span> ${transVal.amount} </span>
                                
                            </li>
                        )
                    })}
                  
                </ul>

                <h3 className='h3'> Add new Transaction</h3>
                <hr />

                <form className='transaction_form' onSubmit={handleAddition } >
                    <label>
                        Enter Description <br />
                        <input type="text"
                        value={newDesc} 
                        onChange={(event) => setDesc(event.target.value)}  
                        placeholder="Detail of transaction" required />
                    </label>

                    <br />
                    <label>
                        Enter Amount <br />
                        <input type="number"
                        value={newAmount} 
                        onChange={(event) => setAmount(event.target.value)} 
                        placeholder="Enter Amount in dollars" required />
                    </label>
                    <br />
                    <input className='btn' type="submit" value="Add Transaction" />
                </form>
            </div>

        </>
    );
}

export default Child; 