import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/user.model";

export const getToken = async (id) => {
    return jwt.sign({ id }, config.SECRET, {
        expiresIn: 86400
    });
}

export const singUpService = async (req) => {
    const {username, email, password} = req.body
    const user = await User.create(
        {
            username, 
            email, 
            password: await User.encryptPassword(password)
        }
    )
    const token = await getToken(user._id)
    return token
}

export const singInService = async (req) => {
    const {email, password} = req.body
    const user = await User.findOne({ email:email })
    if(!user){
        return {
            statuscode: 400,
            message: "User not found",
            token: null,
            user: null
        }
    }
    const isPasswordCorrect = await handleComparePassword( password, user.password)
    if(!isPasswordCorrect) {
        return {
            statuscode: 401,
            message: "Password incorrect",
            token: null,
            user: null
        }
    }
    const token = await getToken(user._id)
    
    return {
        statuscode: 200,
        message: "User signed in successfully",
        token: token,
        user: {
            username: user.username,
            email: user.email,
            roles: user.roles
        }
    }
}

export const handleComparePassword = async (password, recievedPassword) => {
    const isPasswordCorrect = await User.comparePasswords( password, recievedPassword)
    return isPasswordCorrect;
}