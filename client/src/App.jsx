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

function App() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [user, setUser] = useState(null);


    const registerHandler = (email, password) => {
        if (registeredUsers.some(user => user.email === email)) {
            throw new Error('email is taken');
        }

        setRegisteredUsers((state) => [...state, {email, password}]);
    }

    const loginHandler = (email, password) => {
        const user = registeredUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('No such user!');
        }

        setUser(user);
    }

    return (
        <>
            <Header user={user}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/create" element={<Create />} />
                <Route path="/games/:gameId/details" element={<Details />} />
                <Route path="/register" element={<Register onRegister={registerHandler}/>} />
                <Route path="/login" element={<Login onLogin={loginHandler} />} />
            </Routes>

            <Footer />
        </>



    )
}

export default App
