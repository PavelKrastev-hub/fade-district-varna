import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext.jsx';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function Register() {
    const navigate = useNavigate();
    const [errorPopup, setErrorPopup] = useState('');
    const { setUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState,
        watch,
    } = useForm({
        defaultValues: initialValues,
    });

    const registerHandler = async (data) => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    password,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Register failed!');
            }

            const result = await response.json();
            setUser(result);
            navigate('/');

        } catch (error) {
            setErrorPopup(error.message);

            setTimeout(() => {
                setErrorPopup('');
            }, 3000);
        }
    };

    return (
        <section className="py-5" id="registerPage">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        <div className="card p-4 shadow-sm">

                            <h2 className="fw-bold text-center mb-4">Register</h2>

                            {errorPopup && (
                                <div className="alert alert-danger">
                                    {errorPopup}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(registerHandler)}>

                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formState.errors.name ? 'is-invalid' : ''}`}
                                        {...register('name', {
                                            required: 'Name is required!',
                                            minLength: {
                                                value: 2,
                                                message: 'Name must be at least 2 characters!'
                                            }
                                        })}
                                    />
                                    {formState.errors.name && (
                                        <div className="invalid-feedback">
                                            {formState.errors.name.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${formState.errors.email ? 'is-invalid' : ''}`}
                                        {...register('email', {
                                            required: 'Email is required!',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Invalid email address!'
                                            }
                                        })}
                                    />
                                    {formState.errors.email && (
                                        <div className="invalid-feedback">
                                            {formState.errors.email.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Парола</label>
                                    <input
                                        type="password"
                                        className={`form-control ${formState.errors.password ? 'is-invalid' : ''}`}
                                        {...register('password', {
                                            required: 'Password is required!',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters!'
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                                                message: 'Password must contain at least one letter and one number!'
                                            }
                                        })}
                                    />
                                    {formState.errors.password && (
                                        <div className="invalid-feedback">
                                            {formState.errors.password.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Повтори паролата</label>
                                    <input
                                        type="password"
                                        className={`form-control ${formState.errors.confirmPassword ? 'is-invalid' : ''}`}
                                        {...register('confirmPassword', {
                                            required: 'Please confirm your password!',
                                            validate: (value) =>
                                                value === watch('password') || 'Passwords do not match!'
                                        })}
                                    />
                                    {formState.errors.confirmPassword && (
                                        <div className="invalid-feedback">
                                            {formState.errors.confirmPassword.message}
                                        </div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Регистрация
                                </button>

                            </form>

                            <p className="text-center mt-3">
                                Already have an account?{" "}
                                <Link to="/login">Login here</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}