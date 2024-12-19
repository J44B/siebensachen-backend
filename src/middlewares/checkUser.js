import { User, Event } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

async function checkIfUserExists(req, res, next) {
    const {
        params: { id },
    } = req;
    const user = await User.findByPk(id, { include: Event });
    if (!user) throw new ErrorResponse('User not found', 404);
    req.user = user;
    next();
}

export default checkIfUserExists;
