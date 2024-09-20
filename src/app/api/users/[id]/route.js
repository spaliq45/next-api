// import { user } from "@/app/util/db";
import { user } from "../../../util/db"

import { NextResponse } from "next/server";

export function GET(request,{params}){
    // console.log(typeof params.id)
    const data = user.filter((item)=>{
        if(item.id==params.id){
            return item
        }
    });
    if (data.length === 0) {
        // Return 404 if no data is found
        return NextResponse.json(
            { result: "No Data Found", success: false },
            { status: 404 }
        );
    }

    // Return 200 with the data if found
    return NextResponse.json(
        { result: data, success: true },
        { status: 200 }
    );    
}