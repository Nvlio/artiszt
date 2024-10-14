import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import SpotifyProvider from "next-auth/providers/spotify";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin";
import db from "./lib/db";
import { compareSync } from "bcrypt-ts";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

declare module "next-auth" {
    interface Session {
        user: User & {
            ThirdP?: any
            info?: any
        }
    }
}




export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email" },
                senha: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                const emailforn = credentials.email as string
                const senhaforn = credentials.senha as string

                if (emailforn && senhaforn) {
                    const user = await db.user.findUnique({ where: { email: emailforn } })
                    if (user) {
                        const match = compareSync(senhaforn, user.senha ?? "")
                        if (match) {
                            return {
                                id: user.id,
                                email: user.email,
                                userID: user.userID,
                                name: user.name,
                                image:user.imageP,
                                data_entrada: user.dataEntrada,
                                funcao: user.funcao,
                                verificado: user.verificado,
                                frase: user.frase,
                            }
                        }
                    }
                }
                return null
            }
        }),
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        FacebookProvider({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GMAIL_ID,
            clientSecret: process.env.AUTH_GMAIL_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        LinkedInProvider({
            clientId: process.env.AUTH_LINKEDIN_ID,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        SpotifyProvider({
            clientId: process.env.AUTH_SPOTIFY_ID,
            clientSecret: process.env.AUTH_SPOTIFY_SECRET,
            allowDangerousEmailAccountLinking: true
        })
    ],
    trustHost: true,
    secret: process.env.AUTH_SECRET,
    callbacks:{
        jwt({token,profile,user}){
            return {thirdP:profile,info:user,...token}
        },
        session({session,token}){
            session.user.ThirdP = token.thirdP
            session.user.info = token.info
            return session
        }
    }
})



