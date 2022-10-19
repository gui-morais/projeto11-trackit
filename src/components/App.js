import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle"
import InitialPage from "./initialpages/InitialPage"
import SignUpPage from "./initialpages/SignUpPage";
import Habits from "./internalpages/Habits";
import Today from "./internalpages/Today";
import Historic from "./internalpages/Historic";

export default function App() {
    return(
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<InitialPage />} /> */}
                {/* <Route path="/" element={<SignUpPage />} /> */}
                {/* <Route path="/" element={<Habits />} /> */}
                {/* <Route path="/" element={<Today />} /> */}
                <Route path="/" element={<Historic />} />
            </Routes>
        </BrowserRouter>
    )
}