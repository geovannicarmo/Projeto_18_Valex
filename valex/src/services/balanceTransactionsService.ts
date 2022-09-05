import {findByCardId as transactionsRepository} from '../repositories/paymentRepository'
import {findByCardId as rechargeRepository} from '../repositories/rechargeRepository'

export default async function balanceTransactionsService(cardId: number){

const transactions = await transactionsRepository(cardId)

console.log(transactions)

let balance = 0

transactions.map((data)=>
{balance-=data.amount
    data.amount=data.amount/100
})

const recharges = await rechargeRepository(cardId)

const rechargesD = recharges.map((data)=>{
    balance+=data.amount
    data.amount=data.amount/100
})

console.log(recharges)

console.log(balance)

const balanceTransactions = {balance: (balance/100), transactions, recharges}

return balanceTransactions

}

