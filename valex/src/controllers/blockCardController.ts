import { Request, Response } from "express";
import blockSrvice from "../services/blockCardService";


export  async function blockCardController(req: Request, res: Response){

    try{

        
        const dataBlock = req.body
        dataBlock.isblock = true
        
    const reqBlockService = await blockSrvice(dataBlock)
    
    
    res.send(req.body)
}catch(error){
    return res.status(400).send(error)
}
}

export  async function unlockCardController(req: Request, res: Response){

    try{

        
        const dataBlock = req.body
        dataBlock.isblock = false
        
    const reqBlockService = await blockSrvice(dataBlock)
    
    
    res.send(req.body)
}catch(error){
    return res.status(400).send(error)
}
}