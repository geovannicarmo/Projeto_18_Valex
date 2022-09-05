import joi from 'joi'

export const activedSchema = joi.object( {
    cardId: joi.number().required(),
    securityCode: joi.number().min(100).max(999).required(),
    password: joi.number().min(1000).max(9999).required()
})