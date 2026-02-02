import { Link } from "react-router"

export default function Header() {
    return (
        <header className="header">
            <div className="left-side">
                <div className="logo">
                    <Link to={'/'}>
                        <span>FADE</span>
                        <span>✂️</span>
                        <span>DISTRICT</span>
                    </Link>
                </div>
                <nav className="navigation">
                    <ul>
                        <li className="item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="item">
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className="item">
                            <Link to={"/appointment"}>Book</Link>
                        </li>
                        <li className="item">
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul >
                </nav >
            </div >
            <div className="buttons">
                <Link to={'/login'} className="btn login-btn">Login</Link>
                <Link to={'/register'} className="btn register-btn">Register</Link>
            </div >
        </header >
    );
}