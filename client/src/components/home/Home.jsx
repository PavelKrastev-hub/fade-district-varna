export default function Home() {
    return (
        <main className="home">
            <section className="text">
                <h1>
                    <span className="word-white">Style </span>
                    <span className="word-orange">your </span>
                    <span className="word-white">best </span>
                    <span className="word-orange">look!</span>
                </h1>
                <h2 className="">Professional Barbershop!</h2>

                <div className="buttons">
                    <button className="btn book-now">Book Now</button>
                    <button className="btn learn-more">Learn More</button>
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
                    <button class="btn view-services">View All Services</button>
                </div>
            </section>
        </main>
    );
}