"use server"

import { signIn } from "@/auth"
import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"
import { error } from "console"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
import { useId } from "react"

//função para realizar o registro de clientes

interface Dados {
    Nome: string,
    Email: string,
    Funcao: string,
    Senha: string,
    SenhaConfirm: string
}

export default async function Cadastrar(dados: Dados) {
    try {
        console.log(dados)
        const { Nome, Email, Funcao, Senha, SenhaConfirm } = dados
        let user = await db.user.findUnique({ where: { email: Email } })


        if (Nome == "" || Email == "" || Funcao == "" || Senha == "") {
            throw new Error("falta dados")
        }
        if (Senha !== SenhaConfirm) {
            throw new Error("Senhas diferentes")
        } else if (user) {
            throw new Error("conta já existe")
        } else {
            let unique = false
            let UserID = `${Nome}_`
            
            while (!unique) {
                let UserPID: any = null;
                UserID+=`${Math.floor(Math.random()*(1000-1)+1)}`
                UserPID = await db.user.findUnique({ where: { userID: UserID } })

                if (UserPID == null) {
                    console.log("final")
                    console.log(UserPID)
                    unique = true
                }
            }

            const data = new Date()
            const Verificado = Buffer.from([0])
            await db.user.create({
                data: {
                    name: Nome,
                    userID: UserID,
                    email: Email,
                    funcao: Funcao,
                    senha: hashSync(Senha),
                    dataEntrada: data,
                    verificado: Verificado
                }
            }).catch((e) => {
                throw new Error(e.message)
            })
            await signIn("credentials", { email: Email, senha: Senha })
        }


    } catch (e: any) {
        if (e instanceof AuthError) {
            if (e.type === "CredentialsSignin") {
                e.message = "Erro durante o cadastro"
                return (e.message)
            }
        } else if (e.digest && e.digest.substring(0, 13) === "NEXT_REDIRECT") {
            redirect("/")
        } else {
            return (e.message)
        }
    }
    redirect("/")
}