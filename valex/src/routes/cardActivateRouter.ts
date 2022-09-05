import Router from 'express'
import cardActivateController from '../controllers/cardActivateController'

import { activedSchema } from "../schemas/activedSchema";
import validadeInputmeddleware from "../middlewares/middleware";


const cardActivateRouter = Router()

cardActivateRouter.post('/cardActivate', validadeInputmeddleware(activedSchema), cardActivateController)

export default cardActivateRouter