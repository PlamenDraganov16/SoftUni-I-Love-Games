import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import Create from "./components/create/Create.jsx"
import Register from "./components/register/Register.jsx"
import { useState } from "react"

function App() {
    const [user, setUser] = useState(null);

    const registerUser = (email) => {
        setUser({
            email
        })
    }

    return (
        <>
            <Header user={user}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/create" element={<Create />} />
                <Route path="/games/:gameId/details" element={<Details />} />
                <Route path="/register" element={<Register user={user} register={registerUser}/>} />
            </Routes>

            <Footer />
        </>



    )
}

export default App
