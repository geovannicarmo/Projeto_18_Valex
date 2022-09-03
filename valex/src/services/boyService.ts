import * as cardRepository from '../repositories/cardRepository'
import { verifyexpired, decryptWhithCryptr } from '../utils/sqlUtils'
import { insert as doPaymentRepository}  from '../repositories/paymentRepository'
import { findById as businessesRepository}  from '../repositories/businessRepository'
import balanceTransactionsService from './balanceTransactionsService'

export default async function buyService(dataPayment: typedataPayment){

    const dataCard = await cardRepository.findById(dataPayment.cardId)

    if(dataCard===undefined||(!dataCard.password)){
        throw{code: "card not castrated or not ativict"}
    }

    if(verifyexpired(dataCard.expirationDate)){
        throw{code: "card expiraed"}
    }

    if(dataCard.isBlocked){
        throw{code: "card blocked"}
    }

    const passwordStoreg = decryptWhithCryptr(dataCard.password)
    
    if(passwordStoreg!==dataPayment.password){
        throw {code:"password incorrect"}
    }

    const isBusinesses = await businessesRepository(dataPayment.businessesId)

    console.log(isBusinesses)
    console.log("isBusinesses")

    if(!isBusinesses){
        throw {code:"Businesses not found"}
    }

    if(isBusinesses.type!==dataCard.type){
        throw {code:"company is not card type"}
    }

    const paymentData = {
        cardId: dataPayment.cardId,
        businessId: dataPayment.businessesId,
        amount: dataPayment.amount
    }

    const resBalanceService = await balanceTransactionsService(dataPayment.cardId)

    console.log(resBalanceService.balance)

    if(resBalanceService.balance<paymentData.amount){

        throw {code:"insufficient funds"}
    }

    await doPaymentRepository(paymentData)

    return dataCard

}


export type typedataPayment = {

    cardId: number
    amount: number
    password: string
    businessesId: number

}