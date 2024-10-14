import { auth } from "@/auth"
import GET from "@/funcoes/coletaer"


export default async function MainPage({ params }: { params: { user: string } }) {
    const sessao = await auth()
    console.log(sessao?.user.info.verificado)

    const profileData = await GET("Profile", params.user)
    console.log(profileData)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div style={{ width: "108.8%", marginLeft: "5.7%", marginTop: "-7.3%" }}>
                <div className="ProfileBanner" style={{ backgroundColor: "blue", width: "100%", height: "55vh", marginTop: "-7.25%" }} />
                <div className="ProfilePicture MainPicProfile" style={{ backgroundColor: "green", borderRadius: "100%", width: "15%", height: "30vh", marginTop: "-7%", marginLeft: "1%", position: "absolute", border: "5px solid", borderColor: "black" }} />
                <div className="ProfileBIO" style={{ width: "100%", height: "45vh", border: "5px solid black" }} >
                    <div className="ProfileBIO">
                        <div id="extraBio">
                            <h1>{profileData?.funcao}</h1>
                        </div>
                        <div id="MainBio">
                            <div id="flex" className="Titulo"><h1>{profileData?.name}</h1></div>
                            <h1 style={{ fontSize: "14px" }}>@ {profileData?.userID}</h1>
                            <h2>{'Todas os sites externos do cliente'}</h2>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h3>"</h3>
                                <h3>{sessao?.user.info.frase === null ? "Sem nenhuma frase" : sessao?.user.info.frase}</h3>
                                <h3>"</h3>
                            </div>
                        </div>
                        <div id="ThirdBio">

                            <div id="flexBottom" ><h1>{2} seguidores</h1><h1>{2}seguindo</h1></div>

                            {sessao?.user.info.userID === profileData?.userID ?
                                <div className="ButtonBlue" id="botao">
                                    Editar
                                </div>
                                :
                                <div className="ButtonBlue" id="botao">
                                    Entre
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}