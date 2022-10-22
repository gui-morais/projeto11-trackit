import Page from "./Page";
import logo from "../../images/logo.png";
import { useState } from "react";
import axios from "axios";
import { URL } from "../consts/URL";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const [newUser,setNewUser] = useState({email:"", name:"", image:"", password:""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(URL + "auth/sign-up", newUser);
    promise.then(() => {
      alert("Cadastro realizado com sucesso!");
      setLoading(false);
      navigate("/");
    });
    promise.catch((erro) => {
      alert(erro.response.data.message);
      setLoading(false);
    });
  }

  let forms;
  if (loading) {
    forms = (
      <form onSubmit={(e) => signUp(e)}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={newUser.email}
          onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
          required
          disabled
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={newUser.password}
          onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
          required
          disabled
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          value={newUser.name}
          onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
          required
          disabled
        />
        <input
          type="url"
          placeholder="foto"
          name="image"
          value={newUser.image}
          onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
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
        <form onSubmit={(e) => signUp(e)}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="senha"
            name="password"
            value={newUser.password}
            onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="nome"
            name="name"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
            required
          />
          <input
            type="url"
            placeholder="foto"
            name="image"
            value={newUser.image}
            onChange={(e) => setNewUser({...newUser,[e.target.name]:e.target.value})}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
    );
  }

    return(
        <Page>
            <img src={logo} alt="logo.png" />
            {forms}
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </Page>
    )
}