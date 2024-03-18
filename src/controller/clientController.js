
const Client = require('../model/client')
const createError = require('http-errors')
const { clientValidate } = require('../helpers/validation')
const bcrypt = require("bcrypt");
const {signAccessToken} = require('../helpers/jwt_services');


const postRegister = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { error } = clientValidate(req.body)
        console.log("error validation: ", error)
        /**if (!username | !password) {
            throw createError.BadRequest()
        } */
        if (error) {
            throw createError(error.details[0].message)
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const isExist = await Client.findOne({
            username
        })

        if (isExist) {
            throw createError.Conflict(`${username} is ready been registerd`)
        }

        const isCreate = await Client.create({
            username: username,
            password: hashPassword
        })


        return res.json({
            status: 'okayy',
            elements: isCreate
        })

    } catch (error) {
        next(error)
    }

}


const isCheckPassword = async (password,hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword)

    } catch (error) {
        next(error)
    }
}

const postLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const { error } = clientValidate(req.body);
        if (error) {
            throw createError(error.details[0].message)
        }
        const client = await Client.findOne({ username })

        if (!client) {
            throw createError.NotFound('client not registered')
        }

        const isValid = await isCheckPassword(password, client.password)
        console.log(isValid);

        if (!isValid) {
            throw create.Unauthorized();
        }

        const access_token = await signAccessToken(client._id)
        res.json({
            access_token
        })
        res.send(client);

    } catch (error) {
        next(error)
    }
}
module.exports = {
    postRegister, postLogin
}