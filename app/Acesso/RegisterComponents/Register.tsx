

import { useState } from "react";
import Cadastrar from "@/funcoes/Register";

export default function RegisterPage() {
    const [dados,setDados]= useState({
        Nome:"",
        Email:"",
        Funcao:"",
        Senha:"",
        SenhaConfirm:""
    })
    const [erro,setErro] = useState("")

    const Registrar = async (e:any)=>{
        e.preventDefault()
        const res = await Cadastrar(dados)
        if(res){
            setErro(res)
        }
    }

    return (
        <div className="TelaLogin TelaRegister" key={"Register"}>
            <h1 className="Title">Registre-se</h1>
            <hr style={{ width: "100%" }} />
            <h3>Preencha seus dados para entrar no Artiszt</h3>
            <form onSubmit={(e)=>{Registrar(e)}}>
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,Nome:e.target.value}))}} type="text" id="Nome" name="Nome" placeholder="Nome" />
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,Email:e.target.value}))}} type="text" id="Email" name="Email" placeholder="Email" />
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,Funcao:e.target.value}))}} type="text" id="Funcao" name="Funcao" placeholder="Função" />
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,Senha:e.target.value}))}} type="password" id="Senha" name="Senha" placeholder="senha" />
                <input onChange={(e)=>{setDados((prevState)=>({...prevState,SenhaConfirm:e.target.value}))}} type="password" id="SenhaConfirm" name="SenhaConfirm" placeholder="confirme senha" />
                <br />
                <button type="submit">Inscrever-se</button>
            </form>
            <div className="Error" style={{display:erro!==""?"block":"none"}}>{erro}</div>
        </div>
    )
}

/*


*/