import { User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Sign up
export async function signUp() {
    /*
    Check if user exist (email) []
        - If user exists, return an Error []
        - If user does not exist:
            - Secure the password using bcrypt []
            - Store the user in DB []
            - Sign a token []
            - Return the token []
*/

    const { firstName, lastName, username, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
        throw new ErrorResponse(
            'Ein Account mit dieser E-Mail-Adresse existiert bereits.',
            409,
        );

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        firstName,
        lastName,
        username,
        email,
        password: hash,
    });
}
