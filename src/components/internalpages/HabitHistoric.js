import styled from "styled-components";
import { Grey } from "../consts/Colors";


export default function HabitHistoric({habit}) {
    let current;
    let highest;
    if(habit.done) {
        if(habit.currentSequence===1) {
            current = <h2>Sequência atual: <span>{habit.currentSequence} dia</span></h2>;
        } else{
            current = <h2>Sequência atual: <span>{habit.currentSequence} dias</span></h2>;
        }
    } else {
        if(habit.currentSequence===1) {
            current = <h2>Sequência atual: {habit.currentSequence} dia</h2>;
        } else{
            current = <h2>Sequência atual: {habit.currentSequence} dias</h2>;
        }
    }

    if(habit.done && habit.currentSequence===habit.highestSequence) {
        if(habit.highestSequence===1) {
            highest = <h2>Seu recorde: <span>{habit.highestSequence} dia</span></h2>;
        } else{
            highest = <h2>Seu recorde: <span>{habit.highestSequence} dias</span></h2>;
        }
    } else {
        if(habit.highestSequence===1) {
            highest = <h2>Seu recorde: {habit.highestSequence} dia</h2>;
        } else{
            highest = <h2>Seu recorde: {habit.highestSequence} dias</h2>;
        }
    }

    return(
            <TextPart>
                <h1>{habit.name}</h1>
                {current}
                {highest}
            </TextPart>
    );
}

const TextPart = styled.div`
    h1 {
        font-size: 20px;
        color: ${Grey};
        margin-bottom: 10px;
    }
    h2 {
        font-size: 13px;
        color: ${Grey};
        margin: 3px 0px;
    }
    span {
        color: green;
    }
`;