import { Request, Response } from "express"
import cardActivateService from "../services/cardActivateService"

export default async function cardActivateController(req: Request, res: Response){

    const dataActivate = req.body
    dataActivate.securityCode=dataActivate.securityCode.toString()
    dataActivate.password=dataActivate.password.toString()

    console.log(dataActivate)
    try{
        

    const resCardActivateService = await cardActivateService(dataActivate)



    res.status(200).send("card actived")

    }catch(error){
        return res.status(401).send(error)
    }
        

}



