"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

//função responsavel por realizar o login do usuario no site
export default async function Logar(formdata:FormData) {
    const entradas = Array.from(formdata.entries())
    const {Senha,Email} = Object.fromEntries(entradas) as {
        Senha:string,Email:string
    }

    try{
        await signIn("credentials", { email:Email, senha:Senha })
    }catch(e){
        if (e instanceof AuthError){
            if (e.type === "CredentialsSignin"){
                e.message="Erro"
                throw new Error(e.message)
            }
        }
    }
    redirect("/")
}