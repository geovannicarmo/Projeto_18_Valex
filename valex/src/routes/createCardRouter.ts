import { Router } from "express";
import { createCardController } from "../controllers/createCardController";

const routerteste = Router()

routerteste.post('/createCard', createCardController)

export default routerteste