import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Header() {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const closeMenu = () => {
        const navbar = document.getElementById('navbarNav');
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);

        if (bsCollapse) {
            bsCollapse.hide();
        }
    };

    const logoutHandler = () => {
        setUser(null);
        localStorage.removeItem('auth');
        closeMenu();
        navigate('/');
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">

                    <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
                        Fade District
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3">
                            {!user ? (
                                <>
                                    <Link to="/login" className="btn btn-outline-light" onClick={closeMenu}>
                                        Login
                                    </Link>

                                    <Link to="/register" className="btn btn-primary" onClick={closeMenu}>
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span className="text-white">
                                        Hello, {user.name}
                                    </span>

                                    <button
                                        className="btn btn-danger"
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </button>
                                </>
                            )}

                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}