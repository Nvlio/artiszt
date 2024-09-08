

import Cadastrar from "../function/register";

export default function RegisterPage({ tipo }: { tipo: String }) {
    return (
        <div className="TelaLogin TelaRegister" key={"Register"}>
            <h1 className="Title">Registre-se</h1>
            <hr style={{ width: "100%" }} />
            <h3>Preencha seus dados para entrar no Artiszt</h3>
            <form action={Cadastrar}>
                <input type="text" id="Nome" name="Nome" placeholder="Nome" />
                <input type="text" id="Email" name="Email" placeholder="Email" />
                <input type="text" id="Funcao" name="Funcao" placeholder="Função" />
                <input type="password" id="Senha" name="Senha" placeholder="senha" />
                <input type="password" id="SenhaConfirm" name="SenhaConfirm" placeholder="confirme senha" />
                <br />
                <button type="submit">Inscrever-se</button>
            </form>
        </div>
    )
}

/*


*/