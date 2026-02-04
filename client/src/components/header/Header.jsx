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
                            <li className="item">
                                <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
                            </li>
                            <li className="item">
                                <Link to={"/services"} onClick={() => setMenuOpen(false)}>Services</Link>
                            </li>
                            <li className="item">
                                <Link to={"/appointment"} onClick={() => setMenuOpen(false)}>Book</Link>
                            </li>
                            <li className="item">
                                <Link to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="buttons">
                    <Link to={'/login'} className="btn login-btn">Login</Link>
                    <Link to={'/register'} className="btn register-btn">Register</Link>
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
