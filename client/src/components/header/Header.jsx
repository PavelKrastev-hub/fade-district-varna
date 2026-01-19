export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <span>FADE</span>
                    <span>✂️</span>
                    <span>DISTRICT</span>
                </a>
            </div>

            <nav>
                <ul className="navigation">
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
                <div className="buttons">
                    <button className="btn">Login</button>
                    <button className="btn">Register</button>
                </div>
            </nav>
        </header>

    );
}