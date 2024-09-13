import { auth } from "@/auth";
import Sair from "@/funcoes/deslogar";
import Image from "next/image";
import Link from "next/link";

export default async function Search_bar() {
    const sessao = await auth()
    console.log(sessao)
    return (
        <>
            <div className="Search_bar">
                <form className="Search_form">
                    <input type="text" placeholder="Pesquisar" className="Search_input"></input>
                    <div className="Search_button">
                        <Image src="/Public_Itens/Imagens/Default_Site_Img/search_141944.png" alt="pesquisar" width={25} height={25} />
                    </div>
                    <div style={{ width: "30%" }} />
                </form>
                {sessao != null ?
                    <form action={Sair}>
                        <button className="ButtonBlue LoginButton">
                            Sair
                        </button>
                    </form>
                    :

                    <Link href={"/Acesso"}>
                        <div className="ButtonBlue LoginButton">
                            Entre
                        </div>
                    </Link>}
            </div>
        </>
    )
}