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

export const eventSchema = Joi.object({
    title: Joi.string().required().alphanum().min(3).trim(),
    imageUrl: Joi.string().optional().allow('').alphanum(),
    startDate: Joi.string().required(),
    endDate,
    nights,
});
