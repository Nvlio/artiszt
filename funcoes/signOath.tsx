"use server"

import { signIn } from "@/auth"
import db from "@/lib/db"
import autoupdate from "./updateDefault"

//referente a signIn via Oauth (teste)
export default async function OauthSignIn(partner:string) {
    await signIn(`${partner}`)
    console.log("ss")
}

