import Joi from 'joi';

export const userSchema = Joi.object({
    firstName: Joi.string()
        .optional()
        .allow('')
        .alphanum()
        .min(3)
        .max(15)
        .trim(),
    lastName: Joi.string()
        .optional()
        .allow('')
        .alphanum()
        .min(3)
        .max(15)
        .trim(),
    userName: Joi.string()
        .required()
        .pattern(/[A-Za-z0-9]/)
        .trim(),
    email: Joi.string().required().email().trim(),

    // Add password-complexity at some point. https://github.com/kamronbatman/joi-password-complexity

    password: Joi.string()
        .required()
        .pattern(/[A-Za-z0-9]/)
        .min(8)
        .max(24),
});
