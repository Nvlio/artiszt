"use client"

import { useCallback, useEffect, useState } from "react"
import EditarProfile from "../SetProfileComp"
import GETIMG from "@/funcoes/getfoto"
import toBlob from "@/funcoes/transformBlob"
import Image from "next/image"
import POST from "@/funcoes/adicionar"
import { auth } from "@/auth"
import GET from "@/funcoes/coletaer"
import DELETE from "@/funcoes/deletar"
import GETALL from "@/funcoes/getall"

export default function CompPAGE({ perfilID, dataP, ID }: { perfilID: string, dataP: any, ID: any }) {
    const [estado, setEstado] = useState("Normal")
    const [seguindo, setSeguindo] = useState(0)
    const [data, setData] = useState({
        nome: dataP.name,
        funcao: dataP.funcao,
        frase: dataP.frase,
        imgProfile: dataP.imageProfile,
        imgBanner: dataP.imageBanner,
        seguindo:0,
        seguidores:0
    })
    const [links, setLinks] = useState({ profile: "", banner: "" })
    const GETimg = useCallback(async () => {
        const profile = await GETIMG(data.imgProfile, "Profiles")
        const banner = await GETIMG(data.imgBanner, "Banners")
        const profilelink = URL.createObjectURL(await toBlob(profile, data.imgProfile !== null ? data.imgProfile.split(".")[1] : ".png"))
        const bannerlink = URL.createObjectURL(await toBlob(banner, data.imgBanner !== null ? data.imgBanner.split(".")[1] : ".png"))
        setLinks({ profile: profilelink, banner: bannerlink })
    }, [data.imgProfile, data.imgBanner])

    //realiza o seguimento (isolar depois)
    const Seguir = async (e: any) => {
        console.log(ID, dataP.id)
        const resp = await POST("Seguidores", ID, dataP.id)
        if (resp === true) {
            setSeguindo(1)
        }
    }
    //desfaz o seguir (isolar depois)
    const Desfazer = async(e:any)=>{
        const resp = await DELETE("seguidores",ID,dataP.id)
        if(resp===true){
            setSeguindo(0)
        }
    }

    //verifica se o usuario está seguindo a conta (isolar depois)
    const IsSeguindo = async () => {
        const resp = await GET("Seguidores", [ID, dataP.id])
        if (resp === true) {
            setSeguindo(1)
        }
    }

    //pega os dados de quantos seguidores e quantos seguindo
    const GETallfollows = async ()=>{
        const seguidoresF = await GETALL("Seguidores",dataP.id,"userID")
        const seguindoF = await GETALL("seguidores",dataP.id,"seguidorID")
        if(seguidoresF!==false && seguindoF!==false){
            setData((prev)=>({...prev,seguidores:seguidoresF,seguindo:seguindoF}))
        }
    }

    useEffect(() => {
        GETimg()
        GETallfollows()
        if (perfilID !== dataP.userID) {
            IsSeguindo()
        }
    }, [])

    //vai mostrar o perfil do usuario (caso seja o perfil do proprio usuario vai permitir ele mudar, caso contrario so ler])
    return (

        <div style={{ width: "108.8%", marginLeft: "5.7%", marginTop: "-1.3%" }}>
            {estado !== "Normal" ? <EditarProfile props={{ Dados: setData, Estado: setEstado, UserData: data, id: perfilID }} /> : null}
            <div className="BannerPicture">
                <Image alt="Foto do banner" src={links.banner} width={120} height={100} className="BannerPic" />
            </div>
            <div className="ProfilePicture">
                <Image alt="foto do perfil" src={links.profile} width={100} height={100} className="ProfilePic" />
            </div>
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
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3>&quot;</h3>
                            {dataP.frase === null ? 'Nenhuma frase por enquanto' : dataP.frase}
                            <h3>&quot;</h3>
                        </div>
                    </div>
                    <div id="ThirdBio">

                        <div id="flexBottom" ><h1>{data.seguidores} seguidores</h1><h1>{data.seguindo} seguindo</h1></div>

                        {perfilID === dataP?.userID ?
                            <div>
                                <div className="ButtonBlue" id="botao" onClick={() => { setEstado("Edição") }}>
                                    Editar
                                </div>
                            </div>
                            :
                            <>
                                {seguindo === 0 ?
                                    <div className="ButtonBlue" id="botao" onClick={(e) => { Seguir(e) }}>
                                        Seguir
                                    </div>
                                    : <div className="ButtonBlue" id="botao" onClick={(e) => { Desfazer(e) }}>
                                        Seguindo
                                    </div>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}