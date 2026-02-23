import { createBooking as createBookingService } from "../services/bookingService.js";

export const createBooking = async (req, res) => {
    try {

        const { service, date, time } = req.body;
        const userId = req.user._id;

        const booking = await createBookingService({
            userId,
            service,
            date,
            time
        });

        res.status(201).json(booking);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};