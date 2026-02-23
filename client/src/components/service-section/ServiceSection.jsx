import { useState } from "react";

export default function ServiceSection() {

    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 'hair',
            name: "Коса",
            price: "15€",
            description: "Професионално мъжко подстригване с внимание към детайла."
        },
        {
            id: 'beard',
            name: "Брада",
            price: "10€",
            description: "Оформяне и поддръжка на брада с прецизност и стил."
        },
        {
            id: 'combo',
            name: "Комбо",
            price: "20€",
            description: "Подстригване + брада за цялостна визия."
        }
    ];

    return (
        <section className="py-5 bg-light" id="services">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Нашите услуги</h2>
                    <p className="text-muted">
                        Избери услуга и запази своя час онлайн
                    </p>
                </div>

                <div className="row g-4">

                    {services.map(service => (
                        <div key={service.id} className="col-md-4">
                            <div
                                className={`card h-100 shadow-sm position-relative 
                                ${selectedService === service.id ? "border-dark" : ""}`}
                                onClick={() => setSelectedService(service.id)}
                                style={{ cursor: "pointer" }}
                            >

                                <span className="badge bg-dark position-absolute top-0 end-0 m-3 fs-6">
                                    {service.price}
                                </span>

                                <div className="card-body text-center">
                                    <h4 className="card-title fw-bold">
                                        {service.name}
                                    </h4>

                                    <p className="card-text text-muted">
                                        {service.description}
                                    </p>

                                    <button
                                        className={`btn mt-3 
                                        ${selectedService === service.id ? "btn-dark" : "btn-outline-dark"}`}
                                    >
                                        {selectedService === service.id ? "Избрано ✔" : "Избери"}
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-4">
                        <a
                            href="#booking"
                            className="btn btn-primary btn-lg"
                            onClick={() => console.log("Selected service:", selectedService)}
                        >
                            Запази час
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}