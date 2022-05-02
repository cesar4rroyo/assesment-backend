import mongoose from "mongoose";


mongoose.connect("mongodb://localhost/back")
        .then(db=>console.log("DB connected"))
        .catch(err=>console.log(err));