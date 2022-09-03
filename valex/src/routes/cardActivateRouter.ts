import Router from 'express'
import cardActivateController from '../controllers/cardActivateController'


const cardActivateRouter = Router()

cardActivateRouter.post('/cardActivate', cardActivateController)

export default cardActivateRouter