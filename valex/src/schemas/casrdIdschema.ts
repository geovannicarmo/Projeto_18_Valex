import joi from 'joi'

export const validateCardId = joi.object({

    cardId: joi.number().required()
})