import { Router } from "express";
import buyController from "../controllers/buyController";

const  buyRouter = Router()

buyRouter.post('/buy', buyController)

export default buyRouter