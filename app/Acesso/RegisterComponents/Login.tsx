"use client"

import Image from "next/image";
import Logar from "../../../funcoes/signIn";
import OauthSignIn from "../../../funcoes/signOath";
import { useState } from "react";




export default function LoginPage() {
    const [dados,setDados] = useState({
        email:"",
        senha:""
    })
    const [erro,setErro] = useState("")

    const Acessar = async (e:any)=>{
        e.preventDefault()
        const res:string|undefined = await Logar(dados)
        if(res){
            setErro(res)
        }
    }

    return (
        <div className="TelaLogin" key={"Login"}>
            <h1 className="Title">Entre</h1>
            <hr style={{ width: "100%" }} />
            <h3>Logue via:</h3>
            <div className="Accounts">
                <button onClick={()=>{OauthSignIn("google")}} name="1" value={"google"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/google.png"} width={30} height={30} alt="gmail" /></button>

                <button onClick={()=>{OauthSignIn("github")}} name="1" value={"github"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/github.png"} width={30} height={30} alt="github" /></button>

                <button onClick={()=>{OauthSignIn("linkedin")}} name="1" value={"linkedin"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/linkedin.png"} width={30} height={30} alt="linkedin" /></button>

                <button onClick={()=>{OauthSignIn("facebook")}} name="1" value={"facebook"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/facebook.png"} width={30} height={30} alt="facebook" /></button>

                <button onClick={()=>{OauthSignIn("spotify")}} name="1" value={"spotify"}><Image src={"/Public_Itens/Imagens/Default_Site_Img/spotify.png"} width={30} height={30} alt="spotify" /></button>

            </div>
            <br />
            <h3>Ou</h3>
            <br /><br />
            <form onSubmit={(e)=>{Acessar(e)}}>
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,email:e.target.value}))}} type="text" name="Email" id="Email" placeholder="Email"></input>
                <br />
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,senha:e.target.value}))}} type="password" name="Senha" id="Senha" placeholder="Senha"></input>
                <br />
                <button>Enviar</button>
            </form>
            <div className="Error" style={{display:erro!==""?"block":"none"}}>{erro}</div>
        </div>
    )

}