import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:String
    }


})

const User= mongoose.models.users|| mongoose.model("users",userSchema)
export default User

