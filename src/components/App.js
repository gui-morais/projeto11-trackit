import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle"
import InitialPage from "./initialpages/InitialPage"
import SignUpPage from "./initialpages/SignUpPage";
import Habits from "./internalpages/Habits";
import Today from "./internalpages/Today";
import Historic from "./internalpages/Historic";
import { useState } from "react";
import UserContext from "./UserContext";

export default function App() {
    const [userLog, setUserLog] = useState({});
    return(
        <UserContext.Provider value={[userLog,setUserLog]}>
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                {/* <Route path="/habitos" element={<Habits />} /> */}
                <Route path="/hoje" element={<Today />} />
                {/* <Route path="/" element={<Historic />} /> */}
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}