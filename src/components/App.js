import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import InitialPage from "./initialpages/InitialPage";
import SignUpPage from "./initialpages/SignUpPage";
import Habits from "./internalpages/Habits";
import Today from "./internalpages/Today";
import Historic from "./internalpages/Historic";
import { useState } from "react";
import UserContext from "./UserContext";
import HabitsContext from "./HabitsContext";

export default function App() {
  const [userLog, setUserLog] = useState({});
  const [percentage, setPercentage] = useState(0);
  return (
    <UserContext.Provider value={[userLog, setUserLog]}>
      <HabitsContext.Provider value={[percentage, setPercentage]}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </BrowserRouter>
      </HabitsContext.Provider>
    </UserContext.Provider>
  );
}
