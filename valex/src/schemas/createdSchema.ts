import joi from 'joi'

export const validateCreated = joi.object({

    employeeId: joi.number().required(),
    type: joi.valid('groceries', 'restaurant', 'transport', 'education', 'health').required()
})