import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { DarkBlue, LightBlue, Grey } from "../consts/Colors";
import NewHabit from "./NewHabit";
import Habit from "./Habit";


export default function Habits() {
    return(
        <>
            <Header />
            <Body>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </MyHabits>

                <NewHabit />

                <Habit>Ler 1 capítulo de livro</Habit>
                <Habit>Ler 1 capítulo de livro</Habit>
                <Habit>Ler 1 capítulo de livro</Habit>
                <NoHabit>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabit>
            </Body>
            <Footer />
        </>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 17px;
    margin: 70px 0px;
    background-color: #F2F2F2;
    height: 80vh;
`;

const MyHabits = styled.div`
    width: 100%;
    margin: 28px 0px;
    display: flex;
    justify-content: space-between;
    p {
        font-size: 23px;
        color: ${DarkBlue};
    }
    button {
        width: 40px;
        height: 35px;
        background-color: ${LightBlue};
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 27px;
        color: white;
    }
`;

const NoHabit = styled.p`
    color: ${Grey};
    font-size: 18px;
`;