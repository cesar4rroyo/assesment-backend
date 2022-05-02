import User from "../models/user.model"

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const {username, email} = req.body;
        const user = await User.findOne({ username: username });
        if(user){
            return res.status(400).json({
                message: "Username already exists"
            })
        }
        const userEmail = await User.findOne({email: email});
        if(userEmail){
            return res.status(400).json({
                message: "Email already exists"
            })
        }
        next();
        
    } catch (error) {
        res.status(500).json({
            message: "Error, checking username or email: " + error.message,
            error
        })
    }
}
