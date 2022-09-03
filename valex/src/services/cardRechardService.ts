import * as cardRepository from '../repositories/cardRepository'
import { verifyexpired } from '../utils/sqlUtils'
import { insert as insertRecharge}  from '../repositories/rechargeRepository'

export default async function cardRechargeService(dataRecharge: typedataRecharge){

    console.log(dataRecharge)
    const datacard = await cardRepository.findById(dataRecharge.cardId)

    if(datacard===undefined||(!datacard.password)){
        throw{code: "card not castrated or not ativict"}
    }

    if(verifyexpired(datacard.expirationDate)){
        throw{code: "card expiraed"}
    }

    const  rechargeData = { cardId: dataRecharge.cardId, amount:dataRecharge.amount } 
    const Recharged = insertRecharge(rechargeData)
    
    console.log(datacard)
}


export type typedataRecharge = {

    cardId: number
    amount: number

}