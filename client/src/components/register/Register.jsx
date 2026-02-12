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


    const errorText = (field) => formState.errors[field] && (
        <p className='error-text'>{formState.errors[field].message}</p>
    )

    const registerHandler = async (data) => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    password,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Register failed!')
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
    }

    return (
        <section className="auth-section register">
            {errorPopup && (
                <div className="error-popup">
                    {errorPopup}
                </div>
            )}
            <div className="auth-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(registerHandler)}>
                    <div className="form-group">
                        <label htmlFor="register-name">Name</label>
                        <input
                            {...register('name', {
                                required: 'Name is required!',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters!'
                                }
                            })}
                            className={formState.errors.name ? 'input-error' : ''}
                            type="text"
                            id="register-name"
                            placeholder="Your full name"
                        />
                        <div className="error-container">
                            {errorText('name')}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="register-email">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required!',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address!'
                                }
                            })}
                            className={formState.errors.name ? 'input-error' : ''}
                            type="email"
                            id="register-email"
                            placeholder="Your email address"
                        />
                        <div className="error-container">
                            {errorText('email')}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="register-password">Password</label>
                        <input
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
                            className={formState.errors.name ? 'input-error' : ''}
                            type="password"
                            id="register-password"
                            placeholder="Create a password"
                        />
                        <div className="error-container">
                            {errorText('password')}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input
                            {...register('confirmPassword', {
                                required: 'Please confirm your password!',
                                validate: (value) =>
                                    value === watch('password') || 'Passwords do not match!'
                            })}
                            className={formState.errors.name ? 'input-error' : ''}
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm a password"
                        />
                        <div className="error-container">
                            {errorText('confirmPassword')}
                        </div>
                    </div>

                    <button type="submit" className="btn-primary">Register</button>
                </form>

                <p className="auth-switch">
                    Already have an account?
                    <Link to={'/login'} href="/login">Login here</Link>
                </p>
            </div>
        </section>
    );
}