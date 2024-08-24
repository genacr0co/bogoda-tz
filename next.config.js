/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ['ru', 'uz'],
        defaultLocale: 'ru',
        localeDetection: false,
    },
}

module.exports = nextConfig
