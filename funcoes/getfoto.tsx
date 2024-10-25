"use server"

import path from "path"
import toBASE64 from "./transformB64"

export default async function GETIMG(nome:string,dir:string) {
    const caminho = path.join("C:\\Users\\jgabr\\Downloads\\Artiszt\\artiszt.app\\public\\Public_Itens\\Imagens\\Users",dir,nome)
    const file = toBASE64(caminho)
    return file
}