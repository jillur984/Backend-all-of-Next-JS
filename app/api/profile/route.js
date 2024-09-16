
// export const dynamic="force-dynamic" eta dile cache opt out kora jay

import { cookies, headers } from "next/headers";

export async function GET(request){
    const requestHeaders=new Headers(request.headers) // raw js diye kora eta
    const headerList=headers()
    console.log(requestHeaders.get("Authorization")); // raw js code
    console.log(headerList.get("Authorization")); // next js code

    
    cookies().set("page","2") // by next js


    console.log(request.cookies.get("theme")); // raw js
    console.log(cookies().get("page")); // next js for cookie

    // add a cookie
    return new Response("Profile API",{
        headers:{
            "Set-Cookie":"theme=dark" // raw js
        }
    })
}