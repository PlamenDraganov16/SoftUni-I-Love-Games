import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import Create from "./components/create/Create.jsx"
import Register from "./components/register/Register.jsx"
import { useState } from "react"
import Login from "./components/login/Login.jsx"
import Edit from "./components/edit/Edit.jsx"
import UserContext from "./contexts/UserContext.js"
import useFetch from "./hooks/useFetch.js"

function App() {
    const [user, setUser] = useState(null);
    const { request } = useFetch();

    const registerHandler = async (email, password) => {
        const newUser = { email, password };

        //register api call
        const result = await request('/users/register', 'POST', newUser);

        // login user after register
        setUser(result);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password })
        setUser(result);
    }

    const logoutHandler = () => {
        setUser(null);
    };

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        loginHandler,
        logoutHandler,
        registerHandler
    }

    return (
        <UserContext.Provider value={userContextValues}>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/create" element={<Create />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/games/:gameId/details" element={<Details user={user} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Login onLogout={logoutHandler} />} />
            </Routes>

            <Footer />
        </UserContext.Provider>



    )
}

export default App
