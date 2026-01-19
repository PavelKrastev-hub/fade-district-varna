import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async ({ email, password }) => {

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });

    const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return { token, user: { id: user._id, email: user.email, role: user.role } };
};

export const loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return { token, user: { id: user._id, email: user.email, role: user.role } };
};