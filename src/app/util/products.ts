import Product from "../../../models/Products";
import dbConnect from "./db/dbconfig";

export async function createProduct(userData:any):Promise<any>{
    try{
        await dbConnect()

        const response = await Product.create(userData)
        return response
    } catch(error:any){
        console.log("error product",error.message);
    }
}


// export async function getAllProducts():Promise<any>{
//     try {
//         await dbConnect()
//         const response = await Product.find({})
//         return response
//     } catch (error:any) {
//         console.log("error",error.message);        
//     }
// }



export async function getProducts(): Promise<any[]> { // Use appropriate type for your product data
    await dbConnect();
    return Product.find({}).lean(); // 'lean' for plain JS objects
}
  
export async function getProductById(id: string): Promise<any | null> {
    await dbConnect();
    return Product.findById(id).lean();
  }
  