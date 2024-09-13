"use server"

import { signIn } from "@/auth"
import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"
import { error } from "console"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

//função para realizar o registro de clientes
export default async function Cadastrar(formData: FormData) {
    try {
        const entradas = Array.from(formData.entries())
        const { Nome, Email, Funcao, Senha, SenhaConfirm } = Object.fromEntries(entradas) as {
            Nome: string, Email: string, Funcao: string, Senha: string, SenhaConfirm: string
        }
        const user = await db.user.findUnique({ where: { email: Email } })

        if (Senha !== SenhaConfirm) {
            throw new Error("Senhas diferentes")
        } else if (user) {
            throw new Error("conta já existe")
        } else {
            const data = new Date()
            const Verificado = Buffer.from([0])
            await db.user.create({
                data: {
                    name: Nome,
                    email: Email,
                    funcao: Funcao,
                    senha: hashSync(Senha),
                    dataEntrada: data,
                    verificado: Verificado
                }
            }).catch((e) => {
                throw new Error(e.message)
            })
            await signIn("credentials",{email:Email,senha:Senha})
        }


    } catch (e) {
        if(e instanceof AuthError){
            if(e.type==="CredentialsSignin"){
                e.message="Erro"
                throw new Error(e.message)
            }
        }
    }
    redirect("/")
}