import { Request, Response } from "express";
import creatCardService from "../services/creatCardService.";

export async function createCardController(req: Request, res: Response){

    //const apiKey = "zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0"

    const {"x-api-key": apiKey} = req.headers

    if(!apiKey){
        return res.status(404).send("required x-api-key")
    }

    if(typeof(apiKey)!=="string"){
        return res.status(404).send("apiKey not found")
    }

    const data = req.body

try{

    const created = await creatCardService(apiKey, data)
    res.send(created)
    
}catch(error){

    return res.status(401).send(error)
    
    
}

}