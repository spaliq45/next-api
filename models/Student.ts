import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    username:{
        type: String
    },
    rollNo:{
        type: Number
    },
    class:{
        type: Number
    },
    number:{
        type: Number
    }

})

const Student = mongoose.models.students || mongoose.model("students",studentSchema);
export default Student