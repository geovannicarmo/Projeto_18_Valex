import { Router } from "express";
import buyController from "../controllers/buyController";

import validadeInputmeddleware from "../middlewares/middleware";
import { buyValidate } from "../schemas/buyvalidate";

const  buyRouter = Router()

buyRouter.post('/buy',validadeInputmeddleware(buyValidate), buyController)

export default buyRouter