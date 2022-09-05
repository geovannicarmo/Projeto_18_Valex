import joi from 'joi'

export const blockValidate = joi.object({

    cardId: joi.number().required(),
    password: joi.number().min(1000).max(9999).required()
    
    
})