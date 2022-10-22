import Page from "./Page";
import logo from "../../images/logo.png";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../consts/URL";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function InitialPage() {
  const [user,setUser] = useState({email:"", password:""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [ , setUserLog] = useContext(UserContext);

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(URL + "auth/login", user);
    promise.then((response) => {
      setLoading(false);
      setUserLog(response.data);
      navigate("/hoje");
    });
    promise.catch((erro) => {
      alert(erro.response.data.message);
      setLoading(false);
    });
  }

  let forms;
  if (loading) {
    forms = (
      <form onSubmit={(e) => login(e)}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
          required
          disabled
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
          required
          disabled
        />
        <button type="submit" disabled>
          <ThreeDots
            height="20"
            width="300"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </button>
      </form>
    );
  } else {
    forms = (
      <form onSubmit={(e) => login(e)}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    );
  }

  return (
    <Page>
      <img src={logo} alt="logo.png" />
      {forms}
      <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
    </Page>
  );
}
