import { Router } from "express";
import routerteste from "./createCardRouter";
import cardActivateRouter from "./cardActivateRouter";
import routerBlock from "./blockCardRouter";
import cardRechargeRouter from "./cardRecharge";
import balanceTransactionsRouter from "./balanceTransactionsRouter";
import buyRouter from "./buyRouter";

const router = Router();

router.use(routerteste)
router.use(cardActivateRouter)
router.use(routerBlock)
router.use(cardActivateRouter)
router.use(cardRechargeRouter)
router.use(balanceTransactionsRouter)
router.use(buyRouter)

export default router