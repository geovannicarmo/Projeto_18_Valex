import {findByCardId as transactionsRepository} from '../repositories/paymentRepository'
import {findByCardId as rechargeRepository} from '../repositories/rechargeRepository'

export default async function balanceTransactionsService(cardId: number){

const transactions = await transactionsRepository(cardId)

console.log(transactions)

let balance = 0

transactions.map((data)=>{balance-=data.amount})

const recharges = await rechargeRepository(cardId)

recharges.map((data)=>{balance+=data.amount})

console.log(recharges)

console.log(balance)

const balanceTransactions = {balance, transactions, recharges}

return balanceTransactions

}

