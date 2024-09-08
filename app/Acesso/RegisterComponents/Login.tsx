import Image from "next/image";



export default function LoginPage({ tipo }: { tipo: String }) {

    return (
        <div className="TelaLogin" key={"Login"}>
            <h1 className="Title">Entre</h1>
            <hr style={{width:"100%"}}/>
            <h3>Logue via:</h3>
            <button><Image src={"/Public_Itens/Imagens/Default_Site_Img/google.png"} width={30} height={30} alt="gmail"/></button>
            <button><Image src={"/Public_Itens/Imagens/Default_Site_Img/github.png"} width={30} height={30} alt="github"/></button>
            <button><Image src={"/Public_Itens/Imagens/Default_Site_Img/linkedin.png"} width={30} height={30} alt="linkedin"/></button>
            <button><Image src={"/Public_Itens/Imagens/Default_Site_Img/facebook.png"} width={30} height={30} alt="facebook"/></button>
            <button><Image src={"/Public_Itens/Imagens/Default_Site_Img/spotify.png"} width={30} height={30} alt="spotify"/></button>
            <br />
            <h3>Ou</h3>
            <br/><br/>
            <input type="text" placeholder="Email"></input>
            <br />
            <input type="password" placeholder="Senha"></input>
            <br/>
            <button>Enviar</button>
        </div>
    )
}