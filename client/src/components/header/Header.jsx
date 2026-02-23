import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">

                        <a className="navbar-brand fw-bold" href="/">Fade District</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div
                                className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3">
                                <a className="nav-link text-white" href="#catalog">Каталог</a>
                                <a className="nav-link text-white" href="#contact">Контакти</a>
                                <Link to={'/login'} className="btn btn-outline-light">Login</Link>
                                <Link className="btn btn-primary" to={"/register"}>Register</Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </header >

            <div
                className={`overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            ></div>
        </>
    );
}
