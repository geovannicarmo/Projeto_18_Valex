import * as cardRepository from '../repositories/cardRepository'
import { verifyexpired } from '../utils/sqlUtils'
import { insert as insertRecharge}  from '../repositories/rechargeRepository'
import * as company from '.././repositories/companyRepository'
import * as employee from '../repositories/employeeRepository'

export default async function cardRechargeService(apiKey: string, dataRecharge: typedataRecharge){

   
    const dataCompany = await company.findByApiKey(apiKey)
    if(dataCompany===undefined){
        throw {code: "not found company"}
    }

    const datacard = await cardRepository.findById(dataRecharge.cardId)

    if(datacard===undefined||(!datacard.password)){
        throw{code: "card not castrated or not ativict"}
    }

    if(verifyexpired(datacard.expirationDate)){
        throw{code: "card expiraed"}
    }

    const employeeId: number = datacard.employeeId
    const dataEmployee = await employee.findById(employeeId)


    if(dataEmployee.companyId!==dataCompany.id){
        throw {code: "It is not possible to load cards of employees of other companies"}
    }


    const  rechargeData = { cardId: dataRecharge.cardId, 
                            amount: Math.floor(dataRecharge.amount*100) } 


    const Recharged = await insertRecharge(rechargeData)
    
}


export type typedataRecharge = {

    cardId: number
    amount: number

}