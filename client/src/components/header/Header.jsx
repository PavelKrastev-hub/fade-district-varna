export default function Header() {
    return (
        <header className="header">
            <div className="left-side">
                <div className="logo">
                    <a href="/">
                        <span>FADE</span>
                        <span>✂️</span>
                        <span>DISTRICT</span>
                    </a>
                </div>
                <nav className="navigation">
                    <ul>
                        <li className="item">
                            <a href="/">Home</a>
                        </li>
                        <li className="item">
                            <a href="/services">Services</a>
                        </li>
                        <li className="item">
                            <a href="/book">Book</a>
                        </li>
                        <li className="item">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="buttons">
                <button className="btn login-btn">Login</button>
                <button className="btn register-btn">Register</button>
            </div>
        </header>

    );
}