import { auth } from "@/auth"
import GET from "@/funcoes/coletaer"
import CompPAGE from "./ProfileComp"
import { SessionProvider } from "next-auth/react"


export default async function MainPage({ params }: { params: { user: string } }) {
    const sessao = await auth()

    const profileData = await GET("Profile", params.user)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SessionProvider>
                <CompPAGE perfilID={sessao?.user.info.userID} dataP={profileData} />
            </SessionProvider>
        </main>
    )
}