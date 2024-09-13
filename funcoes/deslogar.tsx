"use server"

import { signOut } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default async function Sair(){
    try{
        await signOut()
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