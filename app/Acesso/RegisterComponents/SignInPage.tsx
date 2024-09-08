"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LoginPage from "./Login";

export default function SignPage({ children }: { children: React.ReactNode[] }) {
    //define se vai ser login ou cadastro
    const [fazer, setFazer] = useState("Nenhum")
    const [open, setOpen] = useState("aberto")
    let Register;
    let Login;
    console.log(children)
    children?.map((child: any) => {
        if (child?.key === "Login") { Login = child }
        else {
            Register = child
        }
    })

    const centralizar = { marginLeft: "-25%" }
    return (
        <>



            <div className="Tela" style={{ display: fazer != "Nenhum" ? 'flex' : 'none' }}>
                <div>
                    <button onClick={() => { setFazer('Nenhum') }}>X</button>
                </div>



                {fazer === "Logar" ?
                    <div id="formTela">
                        {Login}
                    </div>

                    :
                    <div id="formTela">
                        {Register}
                    </div>
                }
            </div>
            <div className="BlockSignIn">
                <div>
                    <Image src="/Public_Itens/Imagens/Default_Site_Img/Logo_Texto.png" width={200} height={200} alt="Artiszt" />
                </div>
                <div className="TextoEspecial">
                    <h1 className="Titulo">Entre Agora</h1>
                    <br />
                    <div>
                        <button onClick={() => { setFazer("Logar") }} className="Button" style={centralizar}>Login</button>
                    </div>

                    <div style={{ display: "flex", marginTop: "15%" }}>
                        <hr />
                        <span>OU</span>
                        <hr />
                    </div>
                    <br />
                    <div>
                        <button onClick={() => { setFazer("Cadastro") }} className="Button" style={centralizar}>Registre-se</button>
                    </div>
                    <br /><br /><br />
                    <Link href={"/"}>
                        <p style={{ textAlign: "center" }}>Voltar</p>
                    </Link>
                </div>
            </div>
        </>
    );
}


/*

{fazer!=="Nenhum"?
        <>
        {fazer==="Logar"?Login:Register}
        </>
        :null}
        <div className="BlockSignIn">
            <div>
                <Image src="/Public_Itens/Imagens/Default_Site_Img/Logo_Texto.png" width={200} height={200} alt="Artiszt" />
            </div>
            <div className="TextoEspecial">
                <h1 className="Titulo">Entre Agora</h1>
                <br />
                <div>
                    <button onClick={() => { setFazer("Logar") }} className="Button" style={centralizar}>Login</button>
                </div>

                <div style={{ display: "flex", marginTop: "15%" }}>
                    <hr />
                    <span>OU</span>
                    <hr />
                </div>
                <br />
                <div>
                    <button onClick={() => { setFazer("Cadastro") }} className="Button" style={centralizar}>Registre-se</button>
                </div>
                <br /><br /><br />
                <Link href={"/"}>
                    <p style={{ textAlign: "center" }}>Voltar</p>
                </Link>
            </div>

*/