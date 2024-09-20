import { createStudent } from "../../util/student";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest){
    try {
        const payload = await request.json();
        const newData = await createStudent(payload)
        return NextResponse.json({
            status:200,
            success:true,
            message:"User create succesfully",
            data: newData
        })
    } catch (error:any) {
        console.log("error",error.message)
        return NextResponse.json({error:"Server Side Error"},{status:500})
    }

    
}