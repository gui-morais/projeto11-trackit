import { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DarkBlue } from "../consts/Colors";
import Footer from "./Footer";
import Header from "./Header";


export default function Historic() {
    const [date,setDate] = useState(new Date());
    return(
        <>
            <Header />
            <Body>
                <Title>Histórico</Title>
                <CalendarDiv>
                    <Calendar onChange={setDate} value={date} calendarType="US"/>
                </CalendarDiv>
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
const Title = styled.h1`
    font-size: 23px;
    color: ${DarkBlue};
    margin: 28px 0px;
`;
const CalendarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;