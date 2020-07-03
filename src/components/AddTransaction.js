import React, { useState , useContext} from 'react'
import { GlobalContext } from '../context/context-api'

export const AddTransaction = () => {
    
    const [subject, setsubject] = useState("")
    const [amount, setamount] = useState("")
    
    const { addTransaction } = useContext(GlobalContext)

    const submitHandle = (e) => {
        e.preventDefault()

        const newtransaction = {
            id: Math.floor(Math.random() * 1000000000),
            subject,
            amount: +amount
        }
        console.log(newtransaction)
        addTransaction(newtransaction)
    }
    return (
        <div>
            <form onSubmit={submitHandle}>
                <div className="form-control">
                    <label>Subject</label>
                    <input type="text" value={subject} onChange={e=>setsubject(e.target.value)} placeholder="enter subject..."/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={e=>setamount(e.target.value)} placeholder="enter amount..."/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
