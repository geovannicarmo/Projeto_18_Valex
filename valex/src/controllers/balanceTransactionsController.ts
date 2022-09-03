import { Request, Response } from "express";

export default async function balanceTransactionsController(req: Request, res: Response){

    res.send(req.body)
}