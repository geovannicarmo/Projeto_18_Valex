import {Request, Response, NextFunction } from "express";


export default function validadeInputmeddleware(schema: any){

    return  (req: Request, res: Response, next: NextFunction)=>{

        

        const {error} = schema.validate(req.body, { abortEarly: false})

        if(error){
            console.log(error)
            
            return res.status(422).send(error.details.map((detail: {message: string}) => detail.message))
        }

        next();

    }
    
}