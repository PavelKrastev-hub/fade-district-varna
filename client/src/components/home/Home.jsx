import { Link } from 'react-router'

export default function Home() {
    return (
        <main className="home">
            <section className="text">
                <div className="title-text">
                    <h1>
                        <span className="word-white">Style </span>
                        <span className="word-orange">your </span>
                        <span className="word-white">best </span>
                        <span className="word-orange">look!</span>
                    </h1>
                    <h2 className="">Professional Barbershop!</h2>
                </div>
                <div className="buttons">
                    <Link to={'/book-now'} className="btn book-now">Book Now</Link>
                    <Link to={'/learn-more'} className="btn learn-more">Learn More</Link>
                </div>
            </section>

            <section className="our-services">
                <div className="text-in-left">
                    <p className="section-subtitle">OUR SERVICES</p>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                <ul className="services-list">
                    <li className="service-item">
                        <img src="./images/clipper.png" alt="Haircut" />
                        <h3 className="service-title">Haircuts</h3>
                        <p className="service-desc">Modern & Classic Styles</p>
                    </li>
                    <li className="service-item">
                        <img src="images/blade.png" alt="Shaving" />
                        <h3 className="service-title">Shaves</h3>
                        <p className="service-desc">Hot Towel Shave</p>
                    </li>
                    <li className="service-item">
                        <img src="images/beard.png" alt="Styling" />
                        <h3 className="service-title">Beard Trimming</h3>
                        <p className="service-desc">Expert Grooming</p>
                    </li>
                </ul>
                <div className="services-btn">
                    <Link to={'/all-services'} className="btn view-services">View All Services</Link>
                </div>
            </section>
        </main>
    );
}