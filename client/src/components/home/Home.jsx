import { Link } from 'react-router'
import ServiceSection from '../service-section/ServiceSection.jsx';
import Booking from '../booking/Booking.jsx';
import Catalog from '../catalog/Catalog.jsx';

export default function Home() {
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

            <ServiceSection />

            <Booking />

            <Catalog />
        </>
    );
}