import LayoutPage from "./LayoutPage";
import logo from "../../images/logo.png"

export default function InitialPage() {
    return(
        <LayoutPage>
            <img src={logo} alt="logo.png" />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button type="submit">Entrar</button>
                <p>Não tem uma conta? Cadastre-se!</p>
            </form>
        </LayoutPage>
    )
}