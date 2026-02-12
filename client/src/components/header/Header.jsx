import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="left-side">
                    <div className="logo">
                        <Link to={'/'}>
                            <span>FADE</span>
                            <span>✂️</span>
                            <span>DISTRICT</span>
                        </Link>
                    </div>
                    <nav className={`navigation ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/appointment">Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>

                            <li className="auth-item">
                                <Link to="/login" className="login-link">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="register-link">Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </header>

            <div
                className={`overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            ></div>
        </>
    );
}
