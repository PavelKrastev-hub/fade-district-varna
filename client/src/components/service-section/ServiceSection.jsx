export default function ServiceSection() {
    return (
        <section className="py-5 bg-light" id="services">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Нашите услуги</h2>
                    <p className="text-muted">Избери услуга и запази своя час онлайн</p>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm position-relative">

                            <span className="badge bg-dark position-absolute top-0 end-0 m-3 fs-6">
                                15€
                            </span>

                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Коса</h4>
                                <p className="card-text text-muted">
                                    Професионално мъжко подстригване с внимание към детайла.
                                </p>
                                <button className="btn btn-outline-dark mt-3">
                                    Избери
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm position-relative">

                            <span className="badge bg-dark position-absolute top-0 end-0 m-3 fs-6">
                                10€
                            </span>

                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Брада</h4>
                                <p className="card-text text-muted">
                                    Оформяне и поддръжка на брада с прецизност и стил.
                                </p>
                                <button className="btn btn-outline-dark mt-3">
                                    Избери
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm position-relative border-dark">

                            <span className="badge bg-dark position-absolute top-0 end-0 m-3 fs-6">
                                20€
                            </span>

                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Комбо</h4>
                                <p className="card-text text-muted">
                                    Подстригване + брада за цялостна визия.
                                </p>
                                <button className="btn btn-dark mt-3">
                                    Избери
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a href="#booking" className="btn btn-primary btn-lg btn-40">
                            Запази час
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}