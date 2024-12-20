import { User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Sign up
export async function signUp(req, res) {
    const { firstName, lastName, userName, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
        throw new ErrorResponse(
            'An account with this email already exists.',
            409,
        );

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: hash,
    });
    const token = jwt.sign({ uid: newUser.id }, process.env.JWT_SECRET);
    res.status(201).send({ token });
}
