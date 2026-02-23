import Booking from "../models/Booking.js";

export const createBooking = async ({ userId, service, date, time }) => {

    const existingBooking = await Booking.findOne({
        date: new Date(date),
        time: time
    });

    if (existingBooking) {
        throw new Error("This time slot is already booked");
    }

    const booking = await Booking.create({
        user: userId,
        service,
        date,
        time,
    });

    return booking;
};