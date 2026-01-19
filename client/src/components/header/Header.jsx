export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span>FADE</span>
                <span className="scissors">✂️</span>
                <span>DISTRICT</span>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/book">Book</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
        </header>
    );
}