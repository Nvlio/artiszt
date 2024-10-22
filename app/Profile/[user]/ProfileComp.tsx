"use client"

import { useState } from "react"
import EditarProfile from "../SetProfileComp"

export default function CompPAGE({ perfilID, dataP }: { perfilID: string, dataP: any }) {
    const [estado, setEstado] = useState("Normal")
    const [data, setData] = useState({
        nome: dataP.name,
        funcao: dataP.funcao,
        frase: dataP.frase,
        imgProfile: dataP.imageProfile,
        imgBanner: dataP.imageBanner
    })
    console.log(dataP)

    //vai mostrar o perfil do usuario (caso seja o perfil do proprio usuario vai permitir ele mudar, caso contrario so ler])
    return (
           
            <div style={{ width: "108.8%", marginLeft: "5.7%", marginTop: "-7.3%" }}>
                 {estado!=="Normal"?<EditarProfile props={{Dados:setData,Estado:setEstado}}/>:null}
                <div className="ProfileBanner" style={{ backgroundColor: "blue", width: "100%", height: "55vh", marginTop: "-7.25%" }} />
                <div className="ProfilePicture MainPicProfile" style={{ backgroundColor: "green", borderRadius: "100%", width: "15%", height: "30vh", marginTop: "-7%", marginLeft: "1%", position: "absolute", border: "5px solid", borderColor: "black" }} />
                <div className="ProfileBIO" style={{ width: "100%", height: "45vh", border: "5px solid black" }} >
                    <div className="ProfileBIO">
                        <div id="extraBio">
                            <h1>{dataP?.funcao}</h1>
                        </div>
                        <div id="MainBio">
                            <div id="flex" className="Titulo"><h1>{dataP?.name}</h1></div>
                            <h1 style={{ fontSize: "14px" }}>@ {dataP?.userID}</h1>
                            <h2>{'Todas os sites externos do cliente'}</h2>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h3>"</h3>
                                {dataP.frase === null ? "Nenhuma frase por enquanto" : dataP.frase}
                                <h3>"</h3>
                            </div>
                        </div>
                        <div id="ThirdBio">

                            <div id="flexBottom" ><h1>{2} seguidores</h1><h1>{2}seguindo</h1></div>

                            {perfilID === dataP?.userID ?
                                <div>
                                        <div className="ButtonBlue" id="botao" onClick={() => { setEstado("Edição") }}>
                                            Editar
                                        </div>
                                </div>
                                :
                                <div className="ButtonBlue" id="botao">
                                    Seguir
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}