import mongoose from "mongoose";


const FavSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    },
    description : {
    type: String,
    required: true,
    },
    link:{
    type: String,
    }
},{
    timestamps: true,
    versionKey: false
})

export default module('Fav', FavSchema)