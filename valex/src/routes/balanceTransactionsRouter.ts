import { Router } from "express";
import balanceTransactionsController from "../controllers/balanceTransactionsController";

const  balanceTransactionsRouter = Router()

balanceTransactionsRouter.post('/balanceTransactions', balanceTransactionsController)

export default balanceTransactionsRouter