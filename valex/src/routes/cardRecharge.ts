import { Router } from "express";
import cardRechargeController from "../controllers/cardRechargeController";

import validadeInputmeddleware from "../middlewares/middleware";
import { rechardValidate } from "../schemas/rechargeValidate";

const cardRechargeRouter = Router()

cardRechargeRouter.post('/cardRecharge', validadeInputmeddleware(rechardValidate), cardRechargeController)

export default cardRechargeRouter 