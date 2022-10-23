import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { DarkBlue, Grey } from "../consts/Colors";
import Footer from "./Footer";
import Header from "./Header";

export default function Historic() {
  return (
    <>
      <Header />
      <Body>
        <Title>Histórico</Title>
        <Subtitle>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Subtitle>
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
  background-color: #f2f2f2;
  height: 80vh;
`;
const Title = styled.h1`
  font-size: 23px;
  color: ${DarkBlue};
  margin: 28px 0px;
`;
const Subtitle = styled.h2`
  color: ${Grey};
  font-size: 18px;
`;
