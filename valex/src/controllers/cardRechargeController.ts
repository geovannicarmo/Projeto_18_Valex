import { Request, Response } from "express";
import cardRechargeService from "../services/cardRechardService";

export default async function cardRechargeController(req: Request, res: Response){

try{

    const dataRecharge = req.body
    
    await cardRechargeService(dataRecharge)
    
    res.send("bdgf")
}catch(error){
    return res.status(401).send(error)
}

}