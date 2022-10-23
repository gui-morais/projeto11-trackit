import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DarkBlue, Grey } from "../consts/Colors";
import { URL } from "../consts/URL";
import HabitsContext from "../HabitsContext";
import UserContext from "../UserContext";
import Footer from "./Footer";
import HabitHistoric from "./HabitHistoric";
import Header from "./Header";

export default function Today() {
  const [userLog] = useContext(UserContext);
  const [percentage, setPercentage] = useContext(HabitsContext);
  const [habits, setHabits] = useState([]);

  function catchHabits() {
    const promise = axios.get(URL + "habits/today", {
      headers: { Authorization: "Bearer " + userLog.token },
    });
    promise.then((response) => {
      setHabits(response.data);
    });
    promise.catch((erro) => {
      alert(erro.response.data);
    });
  }

  useEffect(catchHabits, [userLog.token]);

  function checkHabit(habit) {
    let url = URL + "habits/" + habit.id;
    if (habit.done) {
      url = url + "/uncheck";
    } else {
      url = url + "/check";
    }

    const promise2 = axios.post(
      url,
      {},
      {
        headers: { Authorization: "Bearer " + userLog.token },
      }
    );
    promise2.then(catchHabits);
    promise2.catch((erro) => {
      alert(erro.response.data.message);
    });
  }

  let habitsToday = [];

  if (habits.length === 0) {
    habitsToday.push(
      <NoHabit>
        Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para
        começar a trackear!
      </NoHabit>
    );
    setPercentage(0);
  } else {
    const completedHabits = habits.filter((e) => e.done);
    setPercentage(Math.ceil((completedHabits.length * 100) / habits.length));
    habitsToday = habits.map((e) => {
      if (e.done) {
        return (
          <Section key={e.id} check={"#8FC549"} data-identifier="today-infos">
            <HabitHistoric habit={e} />
            <ion-icon
              name="checkbox"
              onClick={() => checkHabit(e)}
              data-identifier="done-habit-btn"
            ></ion-icon>
          </Section>
        );
      } else {
        return (
          <Section key={e.id} check={"#EBEBEB"} data-identifier="today-infos">
            <HabitHistoric habit={e} />
            <ion-icon
              name="checkbox"
              onClick={() => checkHabit(e)}
              data-identifier="done-habit-btn"
            ></ion-icon>
          </Section>
        );
      }
    });
  }

  const subtitle = [];
  if (percentage === 0) {
    subtitle.push(
      <Subtitle key={1} color="#BABABA" data-identifier="today-infos">
        Nenhum hábito concluído ainda
      </Subtitle>
    );
  } else {
    subtitle.push(
      <Subtitle key={1} color="#8FC549" data-identifier="today-infos">
        {percentage}% dos hábitos concluídos
      </Subtitle>
    );
  }

  let day;
  switch (dayjs().day()) {
    case 0:
      day = "Domingo";
      break;
    case 1:
      day = "Segunda";
      break;
    case 2:
      day = "Terça";
      break;
    case 3:
      day = "Quarta";
      break;
    case 4:
      day = "Quinta";
      break;
    case 5:
      day = "Sexta";
      break;
    case 6:
      day = "Sábado";
      break;
    default:
  }

  return (
    <>
      <Header />
      <Body>
        <Title>
          <h1 data-identifier="today-infos">
            {day}, {dayjs().date()}/{dayjs().month() + 1}
          </h1>
          {subtitle}
        </Title>
        {habitsToday}
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
`;
const Title = styled.div`
  margin: 28px 0px;
  h1 {
    font-size: 23px;
    color: ${DarkBlue};
  }
  h2 {
    font-size: 18px;
  }
`;
const Subtitle = styled.h2`
  color: ${(props) => props.color};
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
    color: ${(props) => props.check};
    font-size: 65px;
    cursor: pointer;
  }
`;
const NoHabit = styled.p`
  color: ${Grey};
  font-size: 18px;
`;
