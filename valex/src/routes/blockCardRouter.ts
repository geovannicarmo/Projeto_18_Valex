import { Router } from "express";
import {blockCardController, unlockCardController} from "../controllers/blockCardController";

const routerBlock  = Router()

routerBlock.post('/block', blockCardController)

routerBlock.post('/unlock', unlockCardController)

export default routerBlock