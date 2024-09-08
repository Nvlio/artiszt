"use server"

//função para realizar o registro de clientes
export default async function Cadastrar(formData: FormData) {
    try {
        const entradas = Array.from(formData.entries())
        const { Nome, Email, Funcao, Senha, SenhaConfirm } = Object.fromEntries(entradas) as {
            Nome: string, Email: string, Funcao: string, Senha: string, SenhaConfirm: string
        }
        if (Senha !== SenhaConfirm) {
            throw new Error("Senhas diferentes")
        }
        
    } catch (e: any) {
        console.log(e.message)
    }
}