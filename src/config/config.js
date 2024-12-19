const config = {
    isProduction: process.env.NODE_ENV === 'production',
    corsOrigin:
        process.env.NODE_ENV === 'production'
            ? 'https://glittering-axolotl-46f93c.netlify.app' // INSERT PROD URL HERE (should be netlify)
            : 'http://localhost:5173',
    cookieSettings: {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'lax',
        secure: process.env.NODE_ENV === 'production',
    },
};

export default config;
