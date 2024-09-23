// import { createProduct, getAllProducts } from "../../util/products";
import { createProduct, getProductById, getProducts } from "../../util/products";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request: NextRequest){
    try{
        const payload = await request.json();
        const newData = await createProduct(payload)
        return NextResponse.json({
            status: 200,
            success: true,
            message: "Product create successfully",
            data: newData
        }) 
    } catch(error:any){
        console.log("error products",error.message)
        return NextResponse.json({error:"Server Side Error"})
    }
}


export async function GET(request: NextRequest, { params }: { params: { id?: string } }) { // Make id optional
    console.log(params,"params");
  
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Get the 'id' query parameter
    console.log(id,"id")
    // if(id !== undefined){
    // const { id } = params; 
  
    if (id) {
      // Get a single product by ID
      const product = await getProductById(id);
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json(product);
    }
  //  } 
   else {
      // Get all products
      const products = await getProducts();
      return NextResponse.json(products);
    }
  }
  