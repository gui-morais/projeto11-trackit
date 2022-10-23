import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { DarkBlue, LightBlue, Grey } from "../consts/Colors";
import NewHabit from "./NewHabit";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import axios from "axios";
import { URL } from "../consts/URL";

export default function Habits() {
  const [userLog] = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  useEffect(callHabits, [userLog.token]);

  function callHabits() {
    const promise = axios.get(URL + "habits", {
      headers: { Authorization: "Bearer " + userLog.token },
    });
    promise.then((response) => {
      setHabits(response.data);
    });
    promise.catch((erro) => {
      alert(erro.response.data);
    });
  }

  const renderHabits = [];
  if (habits.length === 0) {
    renderHabits.push(
      <NoHabit data-identifier="no-habit-message">
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </NoHabit>
    );
  } else {
    habits.map((e) =>
      renderHabits.push(<Habit habit={e} key={e.id} callHabits={callHabits} />)
    );
  }

  const [newHabit, setNewHabit] = useState("none");
  function renderNewHabit() {
    if (newHabit === "none") {
      setNewHabit("initial");
    } else {
      setNewHabit("none");
    }
  }
  return (
    <>
      <Header />
      <Body>
        <MyHabits>
          <p>Meus hábitos</p>
          <button onClick={renderNewHabit} data-identifier="create-habit-btn">
            +
          </button>
        </MyHabits>

        <NewHabit
          display={newHabit}
          setNewHabit={setNewHabit}
          callHabits={callHabits}
        />
        {renderHabits}
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
