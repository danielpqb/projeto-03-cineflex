import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../GlobalStyles"
import HomeScreen from "./Screens/Home/HomeScreen";
import MovieScreen from "./Screens/Movie/MovieScreen";
import SessionScreen from "./Screens/Session/SessionScreen";
import ReceiptScreen from "./Screens/Receipt/ReceiptScree";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<HomeScreen />}></Route>
                    <Route path="/filme/:movieId" element={<MovieScreen />}></Route>
                    <Route path="/sessao/:sessionId" element={<SessionScreen />}></Route>
                    <Route path="/sucesso" element={<ReceiptScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};