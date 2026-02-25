import { createBooking as createBookingService } from "../services/bookingService.js";

export const createBooking = async (req, res) => {
    try {

        const { service, date, time, phone } = req.body;
        const userId = req.user.id;

        const booking = await createBookingService({
            userId,
            service,
            date,
            time,
            phone,
        });

        const formattedDate = new Date(booking.date).toLocaleDateString('bg-BG', {
            timeZone: 'Europe/Sofia'
        });

        res.status(201).json({
            ...booking.toObject(),
            date: formattedDate,
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};