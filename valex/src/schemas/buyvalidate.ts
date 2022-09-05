import joi from 'joi'

export const buyValidate = joi.object({

    cardId: joi.number().required(),
    businessesId: joi.number().required(),
    password: joi.number().min(1000).max(9999).required(),
    amount: joi.number().precision(2).min(0.01).required()

})