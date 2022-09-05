import {findByCardId as transactionsRepository} from '../repositories/paymentRepository'
import {findByCardId as rechargeRepository} from '../repositories/rechargeRepository'
import {findById as isCardRepository} from '../repositories/cardRepository' 

export default async function balanceTransactionsService(cardId: number){

    const isCard = await isCardRepository(cardId)

    if(!isCard){
        throw {code: "access denied card is not registered"}
    }

    let balance = 0

    const transactions = await transactionsRepository(cardId)
    console.log(transactions)
    
    transactions.map((data)=>
    {balance-=data.amount
        data.amount=data.amount/100
    })
    
    const recharges = await rechargeRepository(cardId)


recharges.map((data)=>{
    balance+=data.amount
    data.amount=data.amount/100
})


const balanceTransactions = {balance: (balance/100), transactions, recharges}

return balanceTransactions

}

