import sendEmail from "@/EmailApi/emailsend";
import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    const {to ,subject,message}=data;
    try{

        sendEmail(to,subject,message)
    }catch(eror){
        return new Error("boom")
    }
    return NextResponse.json({ "data": data })
}

export async function GET(request) {
    return NextResponse.json({ "name": "Nischal" })
}