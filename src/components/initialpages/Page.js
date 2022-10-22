import styled from "styled-components"
import { LightBlue } from "../consts/Colors"

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        margin-bottom: 30px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    form input {
        height: 45px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    form input::placeholder {
        color: #D5D5D5;
    }
    form button {
        height: 45px;
        background-color: ${LightBlue};
        border-radius: 5px;
        font-size: 20px;
        color: white;
        border: none;
        cursor: pointer;
    }
    form button:disabled {
        opacity: 0.5;
    }
    p {
        font-size: 14px;
        text-decoration: underline;
        color: ${LightBlue};
        margin: 25px auto;
        cursor: pointer;
    }
`;

export default Page;