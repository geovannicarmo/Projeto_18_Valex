import { Router } from "express";
import balanceTransactionsController from "../controllers/balanceTransactionsController";
import { validateCardId } from "../schemas/casrdIdschema";

import validadeInputmeddleware from "../middlewares/middleware";

const  balanceTransactionsRouter = Router()

balanceTransactionsRouter.post('/balanceTransactions', validadeInputmeddleware(validateCardId), balanceTransactionsController)

export default balanceTransactionsRouter