import Page from "./Page";
import logo from "../../images/logo.png"

export default function SignUpPage() {
    return(
        <Page>
            <img src={logo} alt="logo.png" />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="url" placeholder="foto" />
                <button type="submit">Cadastrar</button>
                <p>Já tem uma conta? Faça login!</p>
            </form>
        </Page>
    )
}