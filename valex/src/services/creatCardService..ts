import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Cryptr from 'cryptr'

import * as company from '.././repositories/companyRepository'
import * as employee from '../repositories/employeeRepository'
import * as cardRepository from '../repositories/cardRepository'
import { encryptWhithCryptr } from '../utils/sqlUtils';

export default async function creatCardService(apiKey: string, data: any){

    

    const dataCompany = await company.findByApiKey(apiKey)
    if(dataCompany===undefined){
        throw {code: "not found company"}
    }

    console.log(dataCompany)

    const employeeId: number = data.employeeId
    const dataEmployee = await employee.findById(employeeId)

    if(dataEmployee===undefined){
        throw {code: "not found employeed"}
    }

    if(dataCompany.id!==dataEmployee.companyId){
        throw {code: "not found employeed"}
    }

    console.log(dataEmployee)

    const type = data.type
    const isCardType = await cardRepository.findByTypeAndEmployeeId(type, employeeId)



    if(isCardType!==undefined){
        
        throw {code: "card alreaydy exist"}
    }


   const  cardholderName = nameCard(dataEmployee.fullName)

 console.log(cardholderName)

    

    const cardNunber = faker.finance.creditCardNumber()
    console.log(cardNunber)

    const cvv = faker.finance.creditCardCVV()
    console.log(cvv)
    const securityCode = encryptWhithCryptr(cvv)

    

    const today = dayjs().format('YYYY MM')
    const todayArray = today.split(" ");
    const expirationDate = todayArray[1] +" "+ (Number(todayArray[0])+5).toString() 

    
    const cardData: cardRepository.CardInsertData={
        number:cardNunber, 
        cardholderName, 
        securityCode,
        expirationDate,
        isVirtual: false,
        isBlocked: false,
        type,
        employeeId
    }

    await cardRepository.insert(cardData)

    


    return "opaaaa"
} 

function nameCard(fullName:string){

    const nameEmployeeArray = fullName.split(" ");
  

    const firtstName = nameEmployeeArray[0]
    const lastName = nameEmployeeArray[nameEmployeeArray.length-1] 

    nameEmployeeArray.splice(0, 1);
    nameEmployeeArray.pop()



    const nameMidle = nameEmployeeArray.filter((name)=>name.length>2)
    let nameMidleB = nameMidle.map((name)=>name[0])
    const nameMidleC = nameMidleB.join( )
    
    return firtstName + " " + nameMidleC + " " + lastName
    }



