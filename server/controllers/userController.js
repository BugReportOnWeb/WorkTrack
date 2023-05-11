import { User } from '../models/userModel.js';

const loginUser = (_req, res) => {
    res.json({ message: 'Login user' });
}

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = await User.register(email, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export { loginUser, registerUser };
