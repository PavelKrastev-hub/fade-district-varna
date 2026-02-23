export default function Catalog() {
    return (
        <section className="py-5 bg-light" id="catalog">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Нашият салон</h2>
                    <p className="text-muted">Разгледайте интериора и атмосферата при нас</p>
                </div>

                <div className="d-flex overflow-auto gap-4 pb-3 snap-x">

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="./images/pic1.jpg"
                            className="card-img-top" alt="Salon 1" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 1</h5>
                            <p className="card-text text-muted">Уютна атмосфера и стилен интериор.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="./images/pic2.jpeg" className="card-img-top"
                            alt="Salon 2" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 2</h5>
                            <p className="card-text text-muted">Модерен дизайн и комфорт.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="./images/pic3.jpeg" className="card-img-top"
                            alt="Salon 3" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 3</h5>
                            <p className="card-text text-muted">Просторни зони за подстригване и брада.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="./images/pic4.jpeg" className="card-img-top"
                            alt="Salon 4" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 4</h5>
                            <p className="card-text text-muted">Идеално за индивидуални резервации.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}