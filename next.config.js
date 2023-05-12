/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/vip/doors',
                destination: 'https://web.roblox.com/games/6516141723?privateServerLinkCode=93788170315805114334896237192563',
                permanent: true,
            },
        ];
    },
};