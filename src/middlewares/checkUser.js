import { User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

async function checkIfUserExists(req, res, next) {
    const uid = req.uid;
    if (!uid) {
        return next(new ErrorResponse('Missing userId', 400));
    }

    try {
        const user = await User.findByPk(uid);
        // console.log('from checkUser.js --> ', user); // log the fetched user
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
}

export default checkIfUserExists;
