import * as cardRepository from '../repositories/cardRepository'
import { verifyexpired, decryptWhithCryptr } from '../utils/sqlUtils'

export default async function blockSrvice(dataBlock: dataBlock){

    const dataCard = await cardRepository.findById(dataBlock.cardId)


    if(dataCard===undefined || dataCard.password === undefined){
        throw {code:"card does not exist or is not activated"}
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
}



export type  dataBlock = {

    cardId: number
    password: string
    isblock: boolean
}