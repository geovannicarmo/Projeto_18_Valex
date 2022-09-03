import * as cardRepository from '../repositories/cardRepository'
import { encryptWhithCryptr, decryptWhithCryptr, verifyexpired} from "../utils/sqlUtils"


export default async function cardActivateService(dataActivate: dataActivate){


const dataCard = await cardRepository.findById(dataActivate.cardId)

if(dataCard===undefined){
    throw {code:"cardId not found"}
}

const cvv = decryptWhithCryptr(dataCard.securityCode)


if(cvv!==dataActivate.securityCode){

    throw {code:"cvv incorrect"}

}
if(verifyexpired(dataCard.expirationDate)){
    throw {code:"card expired"}
}

if(dataCard.password){
    throw {code:"card already active"}
}


console.log(dataCard)
dataCard.password=encryptWhithCryptr(dataActivate.password)

  const createdPassword = await cardRepository.update(dataActivate.cardId, dataCard)

    return "------------"
}



export type  dataActivate = {

    cardId: number
    securityCode: string,
    password: string
}

