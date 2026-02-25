import Booking from "../models/Booking.js";

export const createBooking = async ({ userId, service, date, time, phone }) => {

    const existingBooking = await Booking.findOne({
        date: new Date(date),
        time: time
    });

    if (existingBooking) {
        throw new Error("Този час вече е зает!");
    }

    const booking = await Booking.create({
        user: userId,
        service,
        date,
        time,
        phone,
    });

    return await booking.populate('user', 'name email');
};