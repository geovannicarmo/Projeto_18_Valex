import { Request, Response } from "express";
import buyService from "../services/buyService";

export default async function buyController(req: Request, res: Response){


try{

    const dataPayment = req.body
    
   const resBuy =  await buyService(dataPayment)

   
    console.log(resBuy)
    
    res.send("bdgf")
}catch(error){
    return res.status(401).send(error)
}

}