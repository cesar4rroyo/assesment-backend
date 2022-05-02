import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true,
    versionKey: false
})

UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

UserSchema.statics.comparePasswords = async (password, recievedPassword) => {
    return await bcrypt.compare(password, recievedPassword)
}


export default mongoose.model('User', UserSchema)