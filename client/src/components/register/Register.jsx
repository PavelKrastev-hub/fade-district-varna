export default function Register() {
    return (
        <section className="auth-section register">
            <div className="auth-card">
                <h2>Register</h2>

                <form>
                    <div className="form-group">
                        <label for="register-name">Name</label>
                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="register-email">Email</label>
                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="Your email address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label for="register-password">Password</label>
                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary">Register</button>
                </form>

                <p className="auth-switch">
                    Already have an account?
                    <a href="/login">Login here</a>
                </p>
            </div>
        </section>
    );
}