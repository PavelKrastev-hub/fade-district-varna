export default function Booking() {
    return (
        <section className="py-5" id="booking">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Запази час</h2>
                    <p className="text-muted">Попълни формата и избери удобен ден и час</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form id="bookingForm" className="card p-4 shadow-sm">

                            <div className="mb-3">
                                <label className="form-label">Две имена</label>
                                <input type="text" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Телефонен номер</label>
                                <input type="tel" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Дата</label>
                                <input type="date" id="dateInput" className="form-control" required />
                                <div className="text-danger small mt-1 d-none" id="dateError">
                                    Неделя не е работен ден.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Час</label>
                                <select id="timeSelect" className="form-select" required>
                                    <option value="">Избери дата първо</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-dark w-100">
                                Потвърди
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}