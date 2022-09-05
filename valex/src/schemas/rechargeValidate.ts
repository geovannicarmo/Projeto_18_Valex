import joi from 'joi'

export const rechardValidate = joi.object({

    cardId: joi.number().required(),
    amount: joi.number().precision(2).min(0.01).required()
})