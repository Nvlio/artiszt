import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import db from "./lib/db";


export const {handlers:{GET,POST},auth,signIn,signOut} = NextAuth({
    providers:[
        Credentials({
            credentials:{
                email:{label:"Email"},
                senha:{label:"Senha",type:"password"}
            },
            async authorize(credentials){
                const emailforn = credentials.email as String
                const senhaforn = credentials.senha as String
                
                if(emailforn && senhaforn){
                    const usuario = db.user.findUnique({where:{email:emailforn}})
                    if(usuario ){}
                }

                return null
            }
        })
    ]
})