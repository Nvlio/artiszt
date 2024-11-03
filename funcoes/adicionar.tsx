"use server"

import db from "@/lib/db";

export default async function POST(tabela:any,seguidor:string,seguindo:string){
    

    await db[tabela].create({
        data: {
            seguidorID:seguidor,
            userId:seguindo
        }
    }).catch((e) => {
        throw new Error(e.message)
    })
    return true
}