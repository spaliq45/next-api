import Teacher from "../../../models/Teacher"
import dbConnect from "./db/dbconfig"

export async function createTeacher(userData:any): Promise<any> {
    try{
        await dbConnect();

        const response = await Teacher.create(userData)
        return response
    } catch(error:any){
        console.log("error",error.message);
    }
}