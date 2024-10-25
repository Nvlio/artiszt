"use server"

import { auth } from "@/auth"
import db from "@/lib/db"

export default async function AutoUpdate() {
    const dados = await auth()
    let nome = dados?.user.name
    nome = nome?.replace(/ /g,"_").substring(0,13)
    const Email = dados?.user.email
    console.log(Email,nome)
    let unique = false
    while (!unique) {
        let UserPID: any = null;
        nome+=`_${Math.floor(Math.random()*(1000-1)+1)}`
        UserPID = await db.user.findUnique({ where: { userID: nome } })

        if (UserPID == null) {
            unique = true
        }
    }
    await db.user.update({where:{email:Email},data:{userID:nome}})
}