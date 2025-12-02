import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import Create from "./components/create/Create.jsx"
import Register from "./components/register/Register.jsx"
import Logout from "./components/logout/Logout.jsx"
import { useContext } from "react"
import Login from "./components/login/Login.jsx"
import Edit from "./components/edit/Edit.jsx"
import UserContext from "./contexts/UserContext.jsx"

function App() {
    const { user } = useContext(UserContext);

    return (
        <>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/create" element={<Create />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/games/:gameId/details" element={<Details user={user} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
            </Routes>

            <Footer />
        </>



    )
}

export default App
