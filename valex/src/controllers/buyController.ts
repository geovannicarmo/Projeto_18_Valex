import { Request, Response } from "express";

export default async function buyController(req: Request, res: Response){

    res.send(req.body)
}