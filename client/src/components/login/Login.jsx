import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Login() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const loginHandler = async (data) => {
        try {

            const response = await fetch("http://localhost:3030/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || "Login failed!");
            }

            const result = await response.json();

            setUser(result.user);
            localStorage.setItem("token", result.token);

            navigate("/");

        } catch (err) {
            setError(err.message);

            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    return (
        <section className="py-5" id="loginPage">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        <div className="card p-4 shadow-sm">

                            <h2 className="fw-bold text-center mb-4">Login</h2>

                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(loginHandler)}>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        {...register("email", {
                                            required: "Email is required!"
                                        })}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">
                                            {errors.email.message}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Парола</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        {...register("password", {
                                            required: "Password is required!"
                                        })}
                                    />
                                    {errors.password && (
                                        <small className="text-danger">
                                            {errors.password.message}
                                        </small>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-dark w-100">
                                    Вход
                                </button>

                            </form>

                            <p className="text-center mt-3">
                                Don't have an account?{" "}
                                <Link to="/register">Register</Link>
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}