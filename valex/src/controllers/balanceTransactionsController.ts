import { Request, Response } from "express";
import balanceTransactionsService from "../services/balanceTransactionsService";

export default async function balanceTransactionsController(req: Request, res: Response){

    try{

        
        const dataBalance = req.body.cardId
        
        const resBalanceService = await balanceTransactionsService(dataBalance)
        
        
        return res.send(resBalanceService)

    }catch(error){
        return res.status(401).send(error)
    }

}