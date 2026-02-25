import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import bg from "date-fns/locale/bg";
registerLocale("bg", bg);

export default function Booking() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [times, setTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleDateChange = (date) => {

        setSelectedDate(date);
        setTimes([]);
        setSelectedTime("");
        setError("");

        if (!date) return;

        const day = date.getDay();

        if (day === 0) {
            setError("Неделя не е работен ден.");
            return;
        }

        let startHour = 10;
        let endHour = 19;

        if (day === 6) {
            endHour = 14;
        }

        const generatedTimes = [];

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute of ["00", "30"]) {

                let timeString = `${hour.toString().padStart(2, "0")}:${minute}`;

                if (timeString === "13:00" || timeString === "13:30") continue;
                if (hour === endHour && minute === "30") continue;

                generatedTimes.push(timeString);
            }
        }

        setTimes(generatedTimes);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setPhone(value);
            setPhoneError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.length !== 10) {
            setPhoneError("Въведете валиден телефонен номер.");
            return;
        }

        console.log("Date:", selectedDate);
        console.log("Time:", selectedTime);
        console.log("Phone:", phone);
    };

    // const isPhoneValid = phone.length === 10;

    return (
        <section className="py-5" id="booking">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Запази час</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Избери дата
                                </label>

                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    minDate={new Date()}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control form-control-lg"
                                    placeholderText="Избери дата"
                                    locale={'bg'}
                                    filterDate={(date) => date.getDay() !== 0}
                                />

                                {error && (
                                    <div className="text-danger small mt-2">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Избери час
                                </label>

                                <select
                                    className="form-select form-select-lg"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    disabled={times.length === 0}
                                >
                                    <option value="">
                                        {times.length === 0
                                            ? "Избери валидна дата"
                                            : "Избери час"}
                                    </option>

                                    {times.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Телефонен номер
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="08XXXXXXXX"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    maxLength={10}
                                />

                                {phoneError && (
                                    <div className="text-danger small mt-2">
                                        {phoneError}
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-dark w-100 btn-lg"
                            // disabled={!selectedDate || !selectedTime || !isPhoneValid}
                            >
                                Потвърди
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}