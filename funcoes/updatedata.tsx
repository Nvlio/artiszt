"use server"
import db from "@/lib/db"
import { auth } from "@/auth"

export default async function Editar(Tabela: string, data: any) {
    try {
        const SessionData = await auth()
        const emailSessao = SessionData?.user.email
        await db.user.update({ where: { email: emailSessao }, data: { name: data.nome, funcao: data.funcao, frase: data.frase, imageProfile: data.imgProfile, imageBanner: data.imgBanner } })
        return true
    } catch (e) {
        return false
    }

}   