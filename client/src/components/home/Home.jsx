import ServiceSection from '../service-section/ServiceSection.jsx';
import Booking from '../booking/Booking.jsx';
import Catalog from '../catalog/Catalog.jsx';
import { useState } from 'react';

export default function Home() {
    const [selectedService, setSelectedService] = useState(null);
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="display-3 fw-bold">Професионални фризьорски услуги</h1>
                    <p className="lead mb-4">Запази своя час онлайн бързо и лесно</p>
                    <a href="#services" className="btn btn-primary btn-lg px-5">
                        Виж нашите услуги
                    </a>
                </div>
            </section>

            <ServiceSection
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />
            <Booking
                selectedService={selectedService}
            />

            <Catalog />
        </>
    );
}