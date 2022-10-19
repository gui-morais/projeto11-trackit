import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./initialpages/InitialPage"
import GlobalStyle from "./GlobalStyle"


export default function App() {
    return(
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<InitialPage />} />
            </Routes>
        </BrowserRouter>
    )
}