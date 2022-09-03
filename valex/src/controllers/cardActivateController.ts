import { Request, Response } from "express"
import cardActivateService from "../services/cardActivateService"




export default async function cardActivateController(req: Request, res: Response){

    const dataActivate = req.body

    try{
    const resCardActivateService = await cardActivateService(dataActivate)

    console.log(resCardActivateService)



    res.sendStatus(200)

    }catch(error){

        return res.status(404).send(error)
    }
        

}



