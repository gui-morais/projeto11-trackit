import { useContext } from "react";
import styled from "styled-components";
import { DarkBlue } from "../consts/Colors";
import UserContext from "../UserContext";

export default function Header() {
  const [userLog] = useContext(UserContext);
  return (
    <Head>
      <Name>TrackIt</Name>
      <ProfilePhoto
        src={userLog.image}
        alt="Foto de perfil"
        data-identifier="avatar"
      />
    </Head>
  );
}

const Head = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${DarkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Name = styled.h1`
  font-family: "Playball", cursive;
  font-size: 39px;
  color: white;
  margin-left: 18px;
`;

const ProfilePhoto = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  margin-right: 18px;
`;
