import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import Appointment from "./components/appointment/Appointment.jsx";


// import UserContext from "./contexts/UserContext.jsx";
// import { useContext } from "react";

function App() {
    // const { user } = useContext(UserContext);

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/appointment" element={<Appointment />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
