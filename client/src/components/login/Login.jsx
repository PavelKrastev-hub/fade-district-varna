export default function Login() {
    return (
        <section className="auth-section login">
            <div className="auth-card">
                <h2>Login</h2>

                <form>
                    <div className="form-group">
                        <label for="login-email">Email</label>
                        <input
                            type="email"
                            id="login-email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="login-password">Password</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-extra">
                        <a href="#" className="forgot-password">Forgot your password?</a>
                    </div>

                    <button type="submit" className="btn-primary">Login</button>
                </form>

                <p className="auth-switch">
                    Don’t have an account?
                    <a href="/register">Register now</a>
                </p>
            </div>
        </section>
    );
}

