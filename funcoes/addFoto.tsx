"use server"

import { Console } from "console";
import fs from "fs"
import path from "path";

export default async function SalvarImg(pathSend: string, files: any ,nome:string) {
    try {
        const pathImg = pathSend
        console.log(nome)
        files.forEach(async (file: any,ind:string) => {
            const fileName = nome+ind+"."+file.name.split(".")[1]
            const caminho = path.join(pathSend,ind,fileName)
            const buffer64 = Buffer.from(await file.arrayBuffer()).toString("base64")
            fs.writeFileSync(caminho,buffer64,"base64")
        });

        return true
    } catch (e) {
        console.log(e)
        return false
    }
}