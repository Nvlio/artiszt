"use client"

import Image from "next/image";
import Link from "next/link";
import Sair from "@/funcoes/deslogar";
import { redirect, useRouter } from "next/navigation";
import AutoUpdate from "@/funcoes/updateauto";

export default function NavBarMenu(session: any) {
    const url = useRouter()
    // console.log(session.session)

    const update = async () => {
        await AutoUpdate()
    }

    //chama função atualizar dados do usuario caso existe uma sessão porem ela esteja sem informação
    if (session.session && session.session.user.info.userID === null) {
        update()
    }


    //função para sair da sessão
    const signOut = async () => {
        await Sair()
        const path = window.location.pathname
        if (path === "/") {
            window.location.reload()
        } else {
            url.push("/")
        }

    }
    return (
        <>
            <div className="NavMenuSide" >
                <Link href={"/"}>
                    <div className="LogoBorder" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/Logo_artizt-removebg-preview.png" width={100} height={100} alt="logo artiszt" />
                    </div>
                </Link>
                < br />
                <Link href={"/"}>
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/casa.png" width={100} height={100} alt="icon_home" />
                    </div>
                </Link>
                {session.session ?
                    < Link href={`/Profile/${session.session.user.info.userID}`} >
                        <div className="ImgItem" >
                            <Image src="/Public_Itens/Imagens/Default_Site_Img/profile.png" width={100} height={100} alt="Icon_search" />
                        </div>
                    </Link>
                    : null}
                < Link href={"/Msg"} >
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/dialogue_15370872.png" width={100} height={100} alt="Icon_Message" />
                    </div>
                </Link>
                < Link href={"/MyPosts"} >
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/imagem.png" width={100} height={100} alt="Icon_YourPosts" />
                    </div>
                </Link>
                < Link href={"/MyLikes"} >
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/heart.png" width={100} height={100} alt="Icon_Likes" />
                    </div>
                </Link>
                < Link href={"/SiteConfig"} >
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/definicoes.png" width={100} height={100} alt="Icon_Configs" />
                    </div>
                </Link>

                < br /> <br />
                < div className="Postar" >
                    <Link href={"/MakePost"}>
                        <div className="PostBorder ButtonBlue">
                            <div className="ImgItem" >
                                <Image src="/Public_Itens/Imagens/Default_Site_Img/lapis.png" width={100} height={100} alt="Icon_Post" />
                            </div>
                        </div>
                    </Link>
                </div>
                < br /> <br />
                {session.session ?
                    < div className="ImgItem" onClick={() => { signOut() }}>
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/log-out_141942.png" width={100} height={100} alt="Icon_SignOut" />
                    </div> :
                    null}
            </div>
        </>
    )
}


