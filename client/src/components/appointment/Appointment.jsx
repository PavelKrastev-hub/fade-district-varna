export default function Appointment() {
    return (
        <section className="appoinments">
            <div className="form-container">
                <form className="appointment-form">
                    <h2>Book an Appointment</h2>
                    <p>Schedule your appointment with our barber.</p>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="+359 88 123 4567" required />

                    <div className="datetime">
                        <div className="date-container">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="date" required />
                        </div>
                        <div className="time-container">
                            <label htmlFor="time">Time</label>
                            <input type="time" id="time" name="time" required />
                        </div>
                    </div>

                    <button type="submit">Book Appointment</button>
                    <p className="confirmation-text">You'll receive a confirmation text message shortly.</p>
                </form>
            </div>
        </section>
    );
}