import Header from "./Header"
import Footer from "./Footer"

import { GlobalStyle } from "../GlobalStyles"
import Movies from "./Movies"

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />


            <Movies />
            <Footer />
        </>
    )
};