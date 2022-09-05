import { Router } from "express";
import { createCardController } from "../controllers/createCardController";
import { validateCreated } from "../schemas/createdSchema";

import validadeInputmeddleware from "../middlewares/middleware";

const createdRouter = Router()

createdRouter.post('/createCard', validadeInputmeddleware(validateCreated), createCardController)

export default createdRouter