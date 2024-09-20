import User from "../../../models/Users";
import dbConnect from "./db/dbconfig";


export async function createUser(userData:any): Promise<any> {
    try {

        await dbConnect()

        const response= await User.create(userData)
        return response

        
    } catch (error:any) {

        console.log("error",error.message);
        //  throw new Error(error.message)
        
        
    }

}


// export async function createUser(userData: any): Promise<any> {
//     await dbConnect();
//     return User.create(userData);
// }