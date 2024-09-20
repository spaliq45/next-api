import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    username:{
        type:String
    },
    subject:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
})

const Teacher = mongoose.models.teachers || mongoose.model("teachers",teacherSchema);

export default Teacher