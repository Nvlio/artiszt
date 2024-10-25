"use client"
import { useRef, useState } from "react"
import Editar from "@/funcoes/updatedata"
import SalvarImg from "@/funcoes/addFoto"

export default function EditarProfile({ props }: { props: { Dados: any, Estado: any,UserData:any,id:string } }) {
    const [text, setText] = useState({ 0: "Arraste uma imagem ou clieque para definir foto", 1: "Arraste uma imagem ou clique para escolher manualmente" })
    const [imgs,setImgs] = useState({profile:"",banner:""})
    const [erro,setErro]=useState("")
    const refImg = useRef(null)

    // função que adiciona os dados da foto nas areas necessárias
    const AddFoto = (e: any, tipo: string) => {
        e.preventDefault()
        const file = e.dataTransfer.files
        if (tipo === "Perfil") {
            setText((prev) => ({ ...prev, 0: file[0]['name'] }))
            setImgs((prev)=>({...prev,profile:file[0]}))
            props.Dados((prev: any) => ({ ...prev, imgProfile: props.id+"Profiles."+file[0]['name'].split(".")[1] }))
        } else {
            setText((prev) => ({ ...prev, 1: file[0]['name'] }))
            setImgs((prev)=>({...prev,banner:file[0]}))
            props.Dados((prev: any) => ({ ...prev, imgBanner: props.id+"Banners."+file[0]['name'].split(".")[1] }))
        }
    }

    // função que realiza a edição dos dados do usuario
    const EditarDados= async ()=>{
        const imgDados = new FormData()
        console.log(imgs.profile)
        imgDados.append("Profiles",imgs.profile)
        imgDados.append("Banners",imgs.banner)
        const respimg = await SalvarImg("C:\\Users\\jgabr\\Downloads\\Artiszt\\artiszt.app\\public\\Public_Itens\\Imagens\\Users",imgDados,props.id)
        const resp = await Editar("User",props.UserData)
        if(!resp || !respimg){
            setErro("Um erro ocorreu ao editar")
        }else{
            window.location.reload()
        }
    }

    const highlight = () => {
        refImg.current?.classList.add("highlight")
    }
    const unhighlight = () => {
        refImg.current?.classList.remove("highlight")
    }

    return (
        <div className="Tela" style={{ display: 'flex', alignItems: "center" }}>

            <div className="TelaLogin TelaRegister" style={{ width: '700px', paddingTop: "1%" }}>

                <h1 className="Title">Editar Perfil</h1>
                <hr style={{ width: "95%", marginLeft: "3%", marginTop: "5%" }} />
                <br />
                <form className="MiniTela" onSubmit={(e)=>{e.preventDefault();EditarDados()}}>
                    <div>
                        <label style={{ marginLeft: "-63%" }}>Novo Nome</label><br />
                        <input type="text" placeholder={props.UserData.nome} onClick={(e)=>{e.target.value=props.UserData.nome}} onChange={(e)=>{props.Dados((prev:any)=>({...prev,nome:e.target.value}))}}/>
                    </div>
                    <div>
                        <label style={{ marginLeft: "-63%" }}>Nova Função</label><br />
                        <input type="text" placeholder={props.UserData.funcao} onClick={(e)=>{e.target.value=props.UserData.funcao}} onChange={(e)=>{props.Dados((prev:any)=>({...prev,funcao:e.target.value}))}}/>
                    </div>
                    <div>
                        <label style={{ marginLeft: "-63%" }}>Nova Frase</label><br />
                        <input type="text" placeholder={props.UserData.frase} onClick={(e)=>{e.target.value=props.UserData.frase}} onChange={(e)=>{props.Dados((prev:any)=>({...prev,frase:e.target.value}))}}/>
                    </div>
                    <hr style={{ width: "95%", marginLeft: "3%", marginTop: "5%" }} />
                    <br />
                    <div>
                        <label>Imagem Perfil</label><br />
                        <div className="ImageDrop"
                            onDragEnter={highlight}
                            onDragOver={(e) => { e.preventDefault(); highlight() }}
                            onDragLeave={unhighlight}
                            onDrop={(e) => { AddFoto(e, "Perfil") }}
                        >
                            <a>{text[0]}</a>
                        </div>
                    </div>
                    <div>
                        <label>Imagem Banner</label><br />
                        <div className="ImageDrop"
                            onDragEnter={highlight}
                            onDragOver={(e) => { e.preventDefault(); highlight() }}
                            onDragLeave={unhighlight}
                            onDrop={(e) => { AddFoto(e, "Banner") }}
                        >
                            <a>{text[1]}</a>
                        </div>
                    </div>
                        <button className="Button greenBG" style={{ width: "20%", height: "10%",padding:"0%"}}>Enviar</button>
                </form>

                <button onClick={() => { props.Estado("Normal") }}>Voltar</button>
            </div>
        </div>
    )
}