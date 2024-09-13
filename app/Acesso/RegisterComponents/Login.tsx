import Image from "next/image";
import Logar from "../function/signIn";
import OauthSignIn from "../function/signOath";




export default function LoginPage({ tipo }: { tipo: String }) {

    return (
        <div className="TelaLogin" key={"Login"}>
            <h1 className="Title">Entre</h1>
            <hr style={{ width: "100%" }} />
            <h3>Logue via:</h3>
            <div className="Accounts">
                <form action={OauthSignIn}>
                    <button name="1" value={"google"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/google.png"} width={30} height={30} alt="gmail" /></button>
                </form>
                <form action={OauthSignIn}>
                    <button name="1" value={"github"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/github.png"} width={30} height={30} alt="github" /></button>
                </form>
                <form action={OauthSignIn}>
                    <button name="1" value={"linkedin"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/linkedin.png"} width={30} height={30} alt="linkedin" /></button>
                </form>
                <form action={OauthSignIn}>
                    <button name="1" value={"facebook"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/facebook.png"} width={30} height={30} alt="facebook" /></button>
                </form>
                <form action={OauthSignIn}>
                    <button name="1" value={"spotify"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/spotify.png"} width={30} height={30} alt="spotify" /></button>
                </form>
            </div>
            <br />
            <h3>Ou</h3>
            <br /><br />
            <form action={Logar}>
                <input type="text" name="Email" id="Email" placeholder="Email"></input>
                <br />
                <input type="password" name="Senha" id="Senha" placeholder="Senha"></input>
                <br />
                <button>Enviar</button>
            </form>
        </div>
    )
}