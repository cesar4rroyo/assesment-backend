import mongoose from "mongoose";


const listFavSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    favs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "fav"
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{
    timestamps: true,
    versionKey: false
})

export default module('listFav', listFavSchema)