import styled from "styled-components";
import { LightBlue } from "../consts/Colors";
import { Days } from "../consts/Days";

export default function NewHabit() {
    const weekDays = [];
    Days.map((e) => weekDays.push(
        <button>{e}</button>
    ));
  return (
    <Section>
      <form>
        <input type="text" placeholder="nome do hábito" />
        <WeekDays>{weekDays}</WeekDays>
        <Buttons>
          <Cancel>Cancelar</Cancel>
          <Save>Salvar</Save>
        </Buttons>
      </form>
    </Section>
  );
}

const Section = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 5px;
    form input {
        width: 100%;
        height: 45px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    form input::placeholder {
        color: #D5D5D5;
    }
`;
const WeekDays = styled.div`
    button {
        width: 30px;
        height: 30px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        margin-right: 4px;
        cursor: pointer;
        background-color: white;
        color: #D5D5D5;
    }
`;
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;
const Cancel = styled.button`
    width: 85px;
    height: 35px;
    cursor: pointer;
    background-color: white;
    color: ${LightBlue};
    font-size: 16px;
    border: none;
    border-radius: 5px;
`;
const Save = styled.button`
    width: 85px;
    height: 35px;
    cursor: pointer;
    background-color: ${LightBlue};
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
`;
