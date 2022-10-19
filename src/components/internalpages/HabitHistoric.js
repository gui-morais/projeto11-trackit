import styled from "styled-components";
import { Grey } from "../consts/Colors";


export default function HabitHistoric(props) {
    return(
        <Section>
            <TextPart>
                <h1>{props.children}</h1>
                <h2>Sequência atual: 4 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </TextPart>
            <ion-icon name="checkbox"></ion-icon>
        </Section>
    );
}

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
        color: green;
        font-size: 65px;
    }
`;
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
`;