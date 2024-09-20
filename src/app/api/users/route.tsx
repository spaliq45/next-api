import { user } from "../../util/db"


import { createUser } from "../../util/user";
import { NextRequest, NextResponse } from "next/server";




export function GET(request: NextRequest){
    const data = user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request: NextRequest){
    try {
        const payload = await request.json();
        const newData = await createUser(payload)
        return NextResponse.json({
            status:200,
            success:true,
            mesage:"User create succesfully",
            data: newData
        })
    } catch (error:any) {
        console.log("error",error.message)
        return NextResponse.json({error:"Server Side Error"},{status:500})
    }

    
}