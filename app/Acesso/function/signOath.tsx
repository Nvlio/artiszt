"use server"

import { signIn } from "@/auth"
import { redirect } from "next/navigation"

//referente a signIn via Oauth (teste)
export default async function OauthSignIn(data: FormData) {
    try {
        const entradas = Array.from(data.entries())
        let botao = Object.fromEntries(entradas)
        let valorbotao = botao["1"]
        await signIn(`${valorbotao}`)
        redirect("/")
    }catch(e){
        throw new Error(e)
    }

}

