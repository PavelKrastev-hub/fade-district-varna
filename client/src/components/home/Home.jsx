// import { useState } from 'react';
// import { useEffect } from 'react';
import { FaCut, FaShower, FaSpa, FaUserTie } from 'react-icons/fa';

const Home = () => {

    // const [msg, setMsg] = useState('');

    // useEffect(() => {
    //     fetch('/api/test')
    //         .then(res => res.json())
    //         .then(data => setMsg(data.message));
    // }, []);


    return (
        <>
            <section className="home-header">
                <div className="home-header-content">
                    <h1>Fade District</h1>
                    <p>Your modern barbershop in Varna</p>
                    <div className="home-buttons">
                        <button className="btn book">Book Now</button>
                        <button className="btn learn">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="home-info">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service-card">
                        <FaCut className="service-icon" />
                        <h3>Haircut</h3>
                        <p>Modern and classic haircuts tailored to your style.</p>
                    </div>
                    <div className="service-card">
                        <FaUserTie className="service-icon" />
                        <h3>Beard & Grooming</h3>
                        <p>Professional beard trims and grooming services.</p>
                    </div>
                    <div className="service-card">
                        <FaShower className="service-icon" />
                        <h3>Shampoo & Wash</h3>
                        <p>Relaxing wash with premium hair products.</p>
                    </div>
                    <div className="service-card">
                        <FaSpa className="service-icon" />
                        <h3>Hot Towel & Spa</h3>
                        <p>Luxury treatments for a relaxing experience.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;