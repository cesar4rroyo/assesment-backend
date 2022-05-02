import mongoose from "mongoose"

const listFavSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    favs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Fav"
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('ListFav', listFavSchema)