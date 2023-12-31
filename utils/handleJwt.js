const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET; 

/**
 * Debe de pasar el objeto del usuario
 * @param {*} user 
 */

const tokenSing = async (user) => {
    const sign =  jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
           expiresIn:"2h", 
        }
    );
    return sign;

};

/**
 * Debe de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */


const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt,JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {tokenSing, verifyToken}