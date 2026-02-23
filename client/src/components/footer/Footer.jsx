export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">

                <div className="row">

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Fade District</h5>
                        <p className="small text-light">Професионални фризьорски услуги във Варна.</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Навигация</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Начало</a></li>
                            <li><a href="#services" className="text-light text-decoration-none">Услуги</a></li>
                            <li><a href="#catalog" className="text-light text-decoration-none">Каталог</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Контакти</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Контакти</h5>
                        <p className="mb-1">гр. Варна, ул "Константин Фотинов 12"</p>
                        <p className="mb-1"><a href="tel:+359888123456" className="text-light text-decoration-none">+359 888 123
                            456</a></p>
                        <p className="mb-1"><a href="mailto:info@fadedistrict.bg"
                            className="text-light text-decoration-none">info@fadedistrict.bg</a></p>

                        <div className="mt-2 d-flex gap-3">
                            <a href="https://www.facebook.com" target="_blank" className="text-light fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" className="text-light fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="border-light" />

                <div className="text-center small">
                    © 2026 Fade District. Всички права запазени.
                </div>

            </div>
        </footer>
    );
}