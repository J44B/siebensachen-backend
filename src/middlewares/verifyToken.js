import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/ErrorResponse.js';

async function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) throw new ErrorResponse('Please login', 401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('from verifyToken.js --> Decoded Token:', decoded); // Check if userId exists
    req.uid = decoded.uid;
    next();
}

export default verifyToken;
