/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Halim-Portfolio",
    output: "export",
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
};

module.exports = nextConfig;
