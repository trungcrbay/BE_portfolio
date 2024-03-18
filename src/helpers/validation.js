
const Joi = require('joi')

const clientValidate =data => {
    const clientSchema = Joi.object({
        username:Joi.string().pattern(new RegExp('gmail.com$')).email().lowercase().required(),
        password:Joi.string().min(4).max(32).required(),
    })
    return clientSchema.validate(data)
}

module.exports ={
    clientValidate
}