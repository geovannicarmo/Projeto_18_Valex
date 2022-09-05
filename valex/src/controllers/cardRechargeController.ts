import { Request, Response } from "express";
import cardRechargeService from "../services/cardRechardService";

export default async function cardRechargeController(req: Request, res: Response){

try{

    const {"x-api-key": apiKey} = req.headers


    if(!apiKey){
        return res.status(401).send("required x-api-key")
    }

    if(typeof(apiKey)!=="string"){
        return res.status(401).send("apiKey not found")
    }

    const dataRecharge = req.body
    
    await cardRechargeService(apiKey, dataRecharge)
    
    res.send("recharge done successfully")

}catch(error){
    return res.status(401).send(error)
}

}