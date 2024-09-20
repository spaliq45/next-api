import Student from "../../../models/Student"
import dbConnect from "./db/dbconfig"

export async function createStudent(userData:any):Promise<any>{
    try{
        await dbConnect()

        const response = await Student.create(userData)
        return response
    } catch (error:any) {
        console.log("error student",error.message);
    }
}