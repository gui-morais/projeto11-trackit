import styled from "styled-components";
import { DarkBlue } from "../consts/Colors";
import Footer from "./Footer";
import HabitHistoric from "./HabitHistoric";
import Header from "./Header";


export default function Today() {
    return(
        <>
            <Header />
            <Body>
                <Title>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </Title>
                <HabitHistoric>
                    Ler 1 capítulo de livro
                </HabitHistoric>
                <HabitHistoric>
                    Ler 1 capítulo de livro
                </HabitHistoric>
                <HabitHistoric>
                    Ler 1 capítulo de livro
                </HabitHistoric>
            </Body>
            <Footer />
        </>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 17px;
    margin: 70px 0px;
    background-color: #F2F2F2;
    height: 80vh;
`;
const Title = styled.div`
    margin: 28px 0px;
    h1 {
        font-size: 23px;
        color: ${DarkBlue};
    }
    h2 {
        font-size: 18px;
        color: #BABABA;
    }
`;