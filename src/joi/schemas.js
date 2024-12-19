import Joi from 'joi';

export const userSchema = Joi.object({
    first_mame: Joi.string().alphanum().min(3).max(15).trim(),
    last_name: Joi.string().alphanum().min(3).max(15).trim(),
    user_name: Joi.string()
        .pattern(/^[A-Za-z0-9]+-_/i)
        .min(3)
        .max(15)
        .trim()
        .required(),
    email: Joi.string().email().trim().required(),

    // Add password-complexity at some point. https://github.com/kamronbatman/joi-password-complexity

    password: Joi.string()
        .pattern(/^[A-Za-z0-9]+_\.\+\?#-\*!\$%\/:$/i)
        .min(8)
        .max(24)
        .required(),
});
