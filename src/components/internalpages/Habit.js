import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { Grey } from "../consts/Colors";
import { Days } from "../consts/Days";
import { URL } from "../consts/URL";
import UserContext from "../UserContext";

export default function Habit({ habit, callHabits }) {
  const [userLog] = useContext(UserContext);
  const weekDays = Days.map((e, i) => {
    if (habit.days.includes(i)) {
      return (
        <Day key={i} color="white" back="#D5D5D5">
          {e}
        </Day>
      );
    } else {
      return (
        <Day key={i} color="#D5D5D5" back="white">
          {e}
        </Day>
      );
    }
  });

  function removeHabit() {
    if (window.confirm("Deseja remover esse hábito?")) {
      const promise = axios.delete(URL + "habits/" + habit.id, {
        headers: { Authorization: "Bearer " + userLog.token },
      });
      promise.then(() => {
        callHabits();
      });
      promise.catch((erro) => {
        alert(erro.response.data);
      });
    }
  }
  return (
    <Section>
      <Title data-identifier="habit-name">{habit.name}</Title>
      <WeekDays>{weekDays}</WeekDays>
      <ion-icon
        name="trash-outline"
        onClick={removeHabit}
        data-identifier="delete-habit-btn"
      ></ion-icon>
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
  div {
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-right: 4px;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  color: ${Grey};
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.back};
`;
