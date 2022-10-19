import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle"
import InitialPage from "./initialpages/InitialPage"
import SignUpPage from "./initialpages/SignUpPage";
import Habits from "./internalpages/Habits";


export default function App() {
    return(
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<InitialPage />} /> */}
                {/* <Route path="/" element={<SignUpPage />} /> */}
                <Route path="/" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}