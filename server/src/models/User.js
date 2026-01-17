import { Schema, model } from 'mongoose'
import { type } from 'os'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    }
});

const User = model('User', userSchema);

export default User;