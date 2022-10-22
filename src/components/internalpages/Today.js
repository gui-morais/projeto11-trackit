import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DarkBlue } from "../consts/Colors";
import { URL } from "../consts/URL";
import UserContext from "../UserContext";
import Footer from "./Footer";
import HabitHistoric from "./HabitHistoric";
import Header from "./Header";


export default function Today() {
    
    const [userLog] = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    function catchHabits() {
        const promise = axios.get(URL+"habits/today", {
            headers:{"Authorization": "Bearer " + userLog.token}
        });
        promise.then((response) => {
            setHabits(response.data);
        });
        promise.catch((erro) => {
            alert(erro.response.data);
        });
    }

    useEffect(catchHabits,[]);

    function checkHabit(habit) {
        let url = URL + "habits/" + habit.id;
        if(habit.done) {
            url = url + "/uncheck";
        } else {
            url = url + "/check"
        }

        const promise2 = axios.post(url,{},{
            headers:{"Authorization": "Bearer " + userLog.token}
        });
        promise2.then(catchHabits);
        promise2.catch((erro) => {
            alert(erro.response.data.message);
        });
    }

    return(
        <>
            <Header />
            <Body>
                <Title>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </Title>
                {habits.map((e) => {
                    if(e.done) {
                    return(
                    <Section key={e.id} check={"#8FC549"}>
                    <HabitHistoric habit={e} />
                    <ion-icon name="checkbox" onClick={() => checkHabit(e)}></ion-icon>
                </Section>
                )} else {
                    return(
                        <Section key={e.id} check={"#EBEBEB"}>
                        <HabitHistoric habit={e} />
                        <ion-icon name="checkbox" onClick={() => checkHabit(e)}></ion-icon>
                    </Section>
                    )
                }
                })}
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
const Section = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin: 5px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ion-icon {
        color: ${props => props.check};
        font-size: 65px;
        cursor: pointer;
    }
`;