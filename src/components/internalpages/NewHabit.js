import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { LightBlue } from "../consts/Colors";
import { Days } from "../consts/Days";
import { URL } from "../consts/URL";
import UserContext from "../UserContext";

export default function NewHabit({ display, setNewHabit, callHabits }) {
  const [userLog] = useContext(UserContext);
  const [infosNewHabit, setInfosNewHabit] = useState({ name: "", days: [] });
  const [loading, setLoading] = useState(false);
  const weekDays = Days.map((e, i) => {
    if (loading) {
      if (infosNewHabit.days.includes(i)) {
        return (
          <Day
            key={i}
            color="white"
            back="#D5D5D5"
            data-identifier="week-day-btn"
          >
            {e}
          </Day>
        );
      } else {
        return (
          <Day
            key={i}
            color="#D5D5D5"
            back="white"
            data-identifier="week-day-btn"
          >
            {e}
          </Day>
        );
      }
    } else {
      if (infosNewHabit.days.includes(i)) {
        return (
          <Day
            key={i}
            color="white"
            back="#D5D5D5"
            onClick={() => changeDays(i)}
            data-identifier="week-day-btn"
          >
            {e}
          </Day>
        );
      } else {
        return (
          <Day
            key={i}
            color="#D5D5D5"
            back="white"
            onClick={() => changeDays(i)}
            data-identifier="week-day-btn"
          >
            {e}
          </Day>
        );
      }
    }
  });

  const forms = [];
  if (loading) {
    forms.push(
      <form onSubmit={(e) => saveNewHabit(e)}>
        <input
          type="text"
          placeholder="nome do hábito"
          name="name"
          value={infosNewHabit.name}
          onChange={(e) =>
            setInfosNewHabit({
              ...infosNewHabit,
              [e.target.name]: e.target.value,
            })
          }
          required
          disabled
          data-identifier="input-habit-name"
        />
        <WeekDays>{weekDays}</WeekDays>
        <Buttons>
          <Cancel onClick={() => setNewHabit("none")}>Cancelar</Cancel>
          <Save type="submit" disabled>
            <ThreeDots
              height="20"
              width="300"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Save>
        </Buttons>
      </form>
    );
  } else {
    forms.push(
      <form onSubmit={(e) => saveNewHabit(e)}>
        <input
          type="text"
          placeholder="nome do hábito"
          name="name"
          value={infosNewHabit.name}
          onChange={(e) =>
            setInfosNewHabit({
              ...infosNewHabit,
              [e.target.name]: e.target.value,
            })
          }
          required
          data-identifier="input-habit-name"
        />
        <WeekDays>{weekDays}</WeekDays>
        <Buttons>
          <Cancel
            onClick={() => setNewHabit("none")}
            data-identifier="cancel-habit-create-btn"
          >
            Cancelar
          </Cancel>
          <Save type="submit" data-identifier="save-habit-create-btn">
            Salvar
          </Save>
        </Buttons>
      </form>
    );
  }

  function changeDays(i) {
    const name = infosNewHabit.name;
    if (infosNewHabit.days.includes(i)) {
      const newDays = infosNewHabit.days.filter((e) => e !== i);
      setInfosNewHabit({ name: name, days: newDays });
    } else {
      const newDays = [...infosNewHabit.days, i];
      setInfosNewHabit({ name: name, days: newDays });
    }
  }

  function saveNewHabit(e) {
    e.preventDefault();
    setLoading(true);
    if (infosNewHabit.days.length === 0) {
      alert("Você deve adicionar pelo menos um dia da semana!");
      setLoading(false);
    } else {
      const promise = axios.post(URL + "habits", infosNewHabit, {
        headers: { Authorization: "Bearer " + userLog.token },
      });
      promise.then(() => {
        setNewHabit("none");
        setInfosNewHabit({ name: "", days: [] });
        setLoading(false);
        callHabits();
      });
      promise.catch((erro) => {
        alert(erro.response.data);
        setLoading(false);
      });
    }
  }
  return <Section display={display}>{forms}</Section>;
}

const Section = styled.div`
  display: ${(props) => props.display};
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
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 8px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  form input::placeholder {
    color: #d5d5d5;
  }
`;
const WeekDays = styled.div`
  display: flex;
  div {
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-right: 4px;
    cursor: pointer;
  }
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.back};
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const Cancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
