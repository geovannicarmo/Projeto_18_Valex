import * as cardRepository from '../repositories/cardRepository'
import { verifyexpired, decryptWhithCryptr } from '../utils/sqlUtils'

export default async function blockSrvice(dataBlock: dataBlock){
    console.log(dataBlock)

    const dataCard = await cardRepository.findById(dataBlock.cardId)

    console.log(dataCard)

    if(dataCard===undefined || dataCard.password === undefined){
        throw {code:"cardId not found"}
    }

    if(verifyexpired(dataCard.expirationDate)){
        throw {code:"card expired"}
    }


    const passwordStoreg = decryptWhithCryptr(dataCard.password)
    
    if(passwordStoreg!==dataBlock.password){
        throw {code:"password incorrect"}
    }

    if(dataBlock.isblock===dataCard.isBlocked){
        throw{code: "not authorized"}
    }

    dataCard.isBlocked=(!dataCard.isBlocked)

    const dode = await cardRepository.update(dataBlock.cardId, dataCard)
    console.log(dode)

}



export type  dataBlock = {

    cardId: number
    password: string
    isblock: boolean
}