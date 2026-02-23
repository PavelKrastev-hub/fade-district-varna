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
                        <img src="https://instagram.fsof9-1.fna.fbcdn.net/v/t51.82787-15/568186539_18086262881502732_5438750884763508184_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=104&ig_cache_key=MzQ5OTA2OTM4ODQ0NDkyODA2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MjA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fMevcxxs3McQ7kNvwFgQvBs&_nc_oc=Adl2QXYKKDvxYNzB_UKJo8lE_ESzUL1uSTF1E-SDuv9G94aqTvmuNCKSLex9bycArgkEZYuRGHbSlAm57SuvgslI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsof9-1.fna&_nc_gid=B5KINHsjxOPgvnCIvYutHg&oh=00_AfthCqPO7hAKNnDtDvlzTrHyIi9VYXU3Ud1nXk2R3hkeYA&oe=699B4F00"
                            className="card-img-top" alt="Salon 1" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 1</h5>
                            <p className="card-text text-muted">Уютна атмосфера и стилен интериор.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="https://images.unsplash.com/photo-1616628188960-0b682f01b4e5" className="card-img-top"
                            alt="Salon 2" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 2</h5>
                            <p className="card-text text-muted">Модерен дизайн и комфорт.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="https://images.unsplash.com/photo-1616595681920-9822ffb2b64c" className="card-img-top"
                            alt="Salon 3" />
                        <div className="card-body text-center">
                            <h5 className="card-title fw-bold">Салон 3</h5>
                            <p className="card-text text-muted">Просторни зони за подстригване и брада.</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-sm" style={{ minWidth: 300, maxWidth: 300 }}>
                        <img src="https://images.unsplash.com/photo-1598300052623-f458c2c3d47f" className="card-img-top"
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