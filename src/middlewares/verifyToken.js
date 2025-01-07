import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/ErrorResponse.js';

async function verifyToken(req, res, next) {
    const token = req.cookies.token;
    // console.log(`FROM verifyToken.js ===> TOKEN:`, token);

    if (!token) {
        return next(new ErrorResponse('Please login', 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = decoded.uid;
        next();
    } catch (error) {
        return next(new ErrorResponse('Invalid token', 401));
    }
}

export default verifyToken;
