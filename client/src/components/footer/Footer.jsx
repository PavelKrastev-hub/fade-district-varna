export default function Footer() {
    return (
        // < !--Footer -- >
        <footer className="footer">
            <div className="main-div">
                {/* <!-- Contact Info --> */}
                <div className="main-info">
                    <h3>Fade District Varna</h3>
                    <div className="adress">
                        <img src="./images/adress.png" alt="" />
                        <p> Адрес: ул. „Константин Фотинов“ 12, Варна, България</p>
                    </div>
                    <div className="phone">
                        <img src="./images/phone.png" alt="phone" />
                        <a href="tel:+359888123456">+359 888 123 456</a>
                    </div>
                    <div className="email">
                        <img src="./images/email.png" alt="" />
                        <p className="email">Email: </p>
                        <a href="mailto:info@barbershop.bg">fade_district@barbershop.bg</a>
                    </div>
                </div>

                {/* <!-- Opening Hours --> */}
                <div className="working-time">
                    <h4>Работно време</h4>
                    <div className="format-date">
                        <div className="clock-on-left">
                            <img src="./images/clock.png" alt="" />
                        </div>
                        <div className="open-hours">
                            <p>Пон-Пет: 09:00 - 20:00</p>
                            <p>Събота: 09:00 - 12:00</p>
                            <p>Неделя: Почивен ден</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Social Media --> */}
                <div className="social-media">
                    <h4>Последвай ни</h4>
                    <div className="images">
                        <a href="#" className="facebook"><img src="./images/facebook.png" alt="facebook" /></a>
                        <a href="#" className="instagram"><img src="./images/instagram.png" alt="instagram" /></a>
                        <a href="#" className="tiktok"><img src="./images/tiktok.png" alt="tiktok" /></a>
                    </div>
                </div>
            </div>

            {/* <!-- Bottom --> */}
            <div className="copy-right">
                &copy; 2026 Fade Distrct Varna. All Rights Reserved.
            </div>
        </footer>
    );
}