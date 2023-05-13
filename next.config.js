/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/vip/doors',
                destination: 'https://www.roblox.com/games/6516141723?privateServerLinkCode=93788170315805114334896237192563',
                permanent: true,
            },
            {
                source: '/vip/pls-donate',
                destination: 'https://www.roblox.com/games/8737602449?privateServerLinkCode=93197030446730624334551184118810',
                permanent: true,
            },
            {
                source: '/vip/intruder',
                destination: 'https://www.roblox.com/games/8073154099?privateServerLinkCode=92928599800703137397955421852754',
                permanent: true,
            },
            {
                source: '/pls-donate',
                destination: 'https://www.plsdonate.me/sulphurdev',
                permanent: true,
            },
            {
                source: '/socials/discord',
                destination: 'https://www.discord.gg/JfRXtkvMUB',
                permanent: true,
            },
            {
                source: '/socials/twitter',
                destination: 'https://www.twitter.com/robuxtrex',
                permanent: true,
            },
            {
                source: '/socials/youtube',
                destination: 'https://www.youtube.com/@youtube',
                permanent: true,
            },
            {
                source: '/giga-chad',
                destination: 'https://media.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif',
                permanent: true,
            },
        ];
    },
};