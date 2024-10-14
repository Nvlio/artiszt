"use server"

import { signIn } from "@/auth"
import NextAuth, { AuthError } from "next-auth"
import { SignInAuthorizationParams } from "next-auth/react"
import { redirect } from "next/navigation"

//função responsavel por realizar o login do usuario no site
interface Dados{email:string,senha:string}


export default async function Logar(dados:Dados) {
    
    try{
        await signIn("credentials",{email:dados.email,senha:dados.senha})

    }catch(e:any){
        if(e instanceof AuthError){
            return("Conta não encontrada")
        }else if(e.digest.substring(0,13)==="NEXT_REDIRECT"){
            redirect("/")
        }else {
            return("Um erro ocorreu")
        }
    }
}