import { User } from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = await User.register(email, password);

        const token = createToken(newUser._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export { loginUser, registerUser };
