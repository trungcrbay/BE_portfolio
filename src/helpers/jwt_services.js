
const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const signAccessToken = async (clientId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            clientId
        }
        const secret = process.env.ACCESS_TOKEN_SECRET
        const options = {
            expiresIn: '1h' // 10m, 10s, ....
        }

        JWT.sign(payload, secret, options, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}

const verifyAccessToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return next(createError.Unauthorized())
    }
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' '); //chia Bearer va token 
    const token = bearerToken[1];

    //start verify token
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err){
            return next(createError.Unauthorized())
        }
        req.payload = payload
        next();
    })

}

const signRefreshToken = async (clientId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            clientId
        }
        const secret = process.env.REFRESH_TOKEN_SECRET
        const options = {
            expiresIn: '1y' // 10m, 10s, ....
        }

        JWT.sign(payload, secret, options, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}

module.exports = {
    signAccessToken, verifyAccessToken,signRefreshToken
}