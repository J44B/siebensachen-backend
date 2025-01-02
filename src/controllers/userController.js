import { User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Sign up
export async function signUp(req, res) {
    const { firstName, lastName, userName, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    console.log(email);
    if (existingUser) throw new ErrorResponse('Account already exists.', 409);

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

// Log in
export async function logIn(req, res) {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) throw new ErrorResponse('User not found.', 404);

    const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password,
    );

    console.log(password);

    if (!isPasswordValid)
        throw new ErrorResponse('Login failed. Invalid credentials.', 401);

    const user = await User.findByPk(existingUser.id);

    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    // res.json({ user, token });

    res.cookie('token', token, config.cookieSettings);
    res.send({ status: 'logged in' });
}
