import { Router } from "express";
import {blockCardController, unlockCardController} from "../controllers/blockCardController";

import { blockValidate } from "../schemas/blockShema";
import validadeInputmeddleware from "../middlewares/middleware";

const routerBlock  = Router()

routerBlock.post('/block', validadeInputmeddleware(blockValidate), blockCardController)

routerBlock.post('/unlock', validadeInputmeddleware(blockValidate), unlockCardController)

export default routerBlock