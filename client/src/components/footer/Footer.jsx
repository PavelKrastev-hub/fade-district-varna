export default function Footer() {
    return (
        // < !--Footer -- >
        <footer className="footer">
            <div className="main-div">
                {/* <!-- Contact Info --> */}
                <div className="main-info">
                    <h3>Fade District Varna</h3>
                    <p>Адрес: ул. „Константин Фотинов“ 12, Варна, България</p>
                    <p>Телефон: <a href="tel:+359888123456">+359 888 123 456</a></p>
                    <p>Email: <a href="mailto:info@barbershop.bg">face_district@barbershop.bg</a></p>
                </div>

                {/* <!-- Opening Hours --> */}
                <div className="working-time">
                    <h4>Работно време</h4>
                    <p>Пон-Пет: 09:00 - 20:00</p>
                    <p>Събота: 09:00 - 12:00</p>
                    <p>Неделя: Почивен ден</p>
                </div>

                {/* <!-- Social Media --> */}
                <div className="social-media">
                    <h4>Следвай ни</h4>
                    <div className="images">
                        <a href="#"><img src="" alt="facebook" /></a>
                        <a href="#"><img src="" alt="instagram" /></a>
                        <a href="#"><img src="" alt="tiktok" /></a>
                    </div>
                </div>
            </div>

            {/* <!-- Bottom --> */}
            <div className="copy-right">
                &copy; 2026 Fade District Varna. All Rights Reserved.
            </div>
        </footer>
    );
}