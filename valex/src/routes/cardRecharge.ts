import { Router } from "express";
import cardRechargeController from "../controllers/cardRechargeController";

const cardRechargeRouter = Router()

cardRechargeRouter.post('/cardRecharge', cardRechargeController)

export default cardRechargeRouter