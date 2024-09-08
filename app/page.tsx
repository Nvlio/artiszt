import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="Search_bar">
        <input type="text" placeholder="Pesquisar" className="Search_input"></input>
        <div className="Search_button">
          <Image src="/Public_Itens/Imagens/Default_Site_Img/search_141944.png" alt="pesquisar" width={25} height={25} />
        </div>
        <div style={{ width: "30%" }} />
        <Link href={"/Acesso"}>
          <div className="ButtonBlue LoginButton">
            Entre
          </div>
        </Link>
      </div>
    </main>
  );
}
