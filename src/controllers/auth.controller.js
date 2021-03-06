import { singInService, singUpService } from "../services/auth.service.js";


export const signUp = async (req, res) => {
    try {
        const token = await singUpService(req);
        res.status(200).json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user: " + error.message,
            error
        })
    }

}
export const signIn = async (req, res) => {
    try {
        const result = await singInService(req);
        res.status(result.statuscode).json({
            message: result.message,
            token: result.token,
            user: result.user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error signing in: " + error.message,
            error
        })
    }
}