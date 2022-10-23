import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LightBlue } from "../consts/Colors";
import { useContext } from "react";
import { Link } from "react-router-dom";
import HabitsContext from "../HabitsContext";

export default function Footer() {
  const [percentage] = useContext(HabitsContext);
  return (
    <Foot>
      <NewLink to="/habitos">
        <Itens data-identifier="habit-page-action">Hábitos</Itens>
      </NewLink>
      <NewLink to="/hoje">
        <Today>
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: LightBlue,
            })}
          />
        </Today>
      </NewLink>
      <NewLink to="/historico">
        <Itens data-identifier="historic-page-action">Histórico</Itens>
      </NewLink>
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

const Itens = styled.div`
  font-size: 18px;
  color: ${LightBlue};
  cursor: pointer;
`;

const NewLink = styled(Link)`
  text-decoration: none;
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
