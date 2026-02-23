// import { useState } from 'react';
import { Link } from 'react-router'

export default function Login() {

    // const [data, setData] = useState({
    //     email: '',
    //     password: '',
    // });


    const formAction = (formData) => {
        const email = formData.get('email');

        console.log(email);
    }

    return (
        <section className="py-5" id="loginPage">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        <div className="card p-4 shadow-sm">

                            <h2 className="fw-bold text-center mb-4">Login</h2>

                            <form id="loginForm">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Парола</label>
                                    <input type="password" className="form-control" required />
                                </div>

                                <button type="submit" className="btn btn-dark w-100">Вход</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}