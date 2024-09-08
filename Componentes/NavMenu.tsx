"use client"

import Image from "next/image";
import Link from "next/link";

export default function NavBarMenu() {
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
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/casa.png"  width={100} height={100} alt="icon_home" />
                    </div>
                </Link>
                < Link href={"/Search"} >
                    <div className="ImgItem" >
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/search_141944.png" width={100} height={100} alt="Icon_search" />
                    </div>
                </Link>
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
                < div className="ImgItem" onClick={() => { console.log("excluido") }}>
                    <Image src="/Public_Itens/Imagens/Default_Site_Img/log-out_141942.png" width={100} height={100}  alt="Icon_SignOut" />
                </div>
            </div>
        </>
    )
}


