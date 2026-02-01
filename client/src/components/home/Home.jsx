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

            <section class="our-services">
                <div className="text-in-left">
                    <p class="section-subtitle">OUR SERVICES</p>
                    <h2 class="section-title">What We Offer</h2>
                </div>
                <ul class="services-list">
                    <li class="service-item">
                        <img src="./images/clipper.png" alt="Haircut" />
                        <h3 class="service-title">Haircuts</h3>
                        <p class="service-desc">Modern & Classic Styles</p>
                    </li>
                    <li class="service-item">
                        <img src="images/blade.png" alt="Shaving" />
                        <h3 class="service-title">Shaves</h3>
                        <p class="service-desc">Hot Towel Shave</p>
                    </li>
                    <li class="service-item">
                        <img src="images/beard.png" alt="Styling" />
                        <h3 class="service-title">Beard Trimming</h3>
                        <p class="service-desc">Expert Grooming</p>
                    </li>
                </ul>
                <div class="services-btn">
                    <Link to={'/all-services'} class="btn view-services">View All Services</Link>
                </div>
            </section>
        </main>
    );
}