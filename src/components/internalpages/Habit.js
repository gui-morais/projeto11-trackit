import styled from "styled-components";
import { Grey } from "../consts/Colors";
import { Days } from "../consts/Days";


export default function Habit(props) {
    const weekDays = [];
    Days.map((e) => weekDays.push(
        <button>{e}</button>
    ));
    return(
        <Section>
            <Title>{props.children}</Title>
            <WeekDays>{weekDays}</WeekDays>
            <ion-icon name="trash-outline"></ion-icon>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin: 5px 0px;
    position: relative;
    ion-icon {
        color: ${Grey};
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`;

const WeekDays = styled.div`
    display: flex;
    margin-top: 10px;
    button {
        width: 30px;
        height: 30px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        margin-right: 4px;
        background-color: white;
        color: #D5D5D5;
        display: flex;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    color: ${Grey};
`;