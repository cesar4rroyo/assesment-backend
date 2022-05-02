import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";
import User from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).json({
                message: "No token provided"
            });
        }
        const jwt = jsonwebtoken.verify(token, config.SECRET)

        const user = await User.findById(jwt.id, {password: 0})
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        next();
    } catch (error) {
        res.status(403).json({
            message: "Unauthorized, error verifying token: " + error.message,
            error
        })
    }
}