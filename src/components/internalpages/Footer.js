import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LightBlue } from "../consts/Colors"


export default function Footer() {
    const percentage = 66;
    return(
        <Foot>
            <Itens>Hábitos</Itens>
            <Today>
                <CircularProgressbar value={percentage} text={`Hoje`} styles={buildStyles({
          textColor: "white",
          pathColor: "white",
          trailColor: LightBlue
        })}/>
            </Today>
            <Itens>Histórico</Itens>
        </Foot>
    );
}

const Foot = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    position: fixed;
    bottom: 0;
`;

const Itens = styled.p`
    font-size: 18px;
    color: ${LightBlue};
    cursor: pointer;
`;

const Today = styled.div`
    width: 90px;
    height: 90px;
    margin-bottom: 50px;
    cursor: pointer;
    background-color: ${LightBlue};
    border-radius: 50%;
    padding: 6px;
`;