import { Router } from "express";

import createdRouter from "./createCardRouter";
import cardActivateRouter from "./cardActivateRouter";
import routerBlock from "./blockCardRouter";
import cardRechargeRouter from "./cardRecharge";
import balanceTransactionsRouter from "./balanceTransactionsRouter";
import buyRouter from "./buyRouter";

const router = Router();


router.use(routerBlock)
router.use(cardRechargeRouter)
router.use(buyRouter)

router.use(cardActivateRouter)
router.use(balanceTransactionsRouter)
router.use(createdRouter)


export default router